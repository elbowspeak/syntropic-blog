#!/bin/bash
#
# Bear Notes to Hugo Import Script
# Usage: ./scripts/import-bear.sh /path/to/bear/exports
#
# Bear exports markdown files with:
# - Title as first H1 heading
# - Tags inline as #hashtags
# - Creation date preserved in file metadata
#
# This script:
# 1. Extracts title from first H1
# 2. Extracts tags from #hashtags
# 3. Uses file modification date as publish date
# 4. Creates proper Hugo front matter
# 5. Moves processed file to content/posts/

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BLOG_DIR="$(dirname "$SCRIPT_DIR")"
POSTS_DIR="$BLOG_DIR/content/posts"

if [ -z "$1" ]; then
    echo "Usage: $0 <path-to-bear-exports>"
    echo ""
    echo "Example: $0 ~/Desktop/bear-export"
    exit 1
fi

SOURCE_DIR="$1"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Directory not found: $SOURCE_DIR"
    exit 1
fi

mkdir -p "$POSTS_DIR"

process_file() {
    local file="$1"
    local filename=$(basename "$file")

    # Skip if not markdown
    if [[ ! "$filename" =~ \.md$ ]]; then
        return
    fi

    echo "Processing: $filename"

    # Extract title from first H1 (# Title)
    local title=$(grep -m1 '^# ' "$file" | sed 's/^# //')
    if [ -z "$title" ]; then
        title="${filename%.md}"
    fi

    # Extract tags (Bear uses #tag or #multi word tag#)
    local tags=$(grep -oE '#[a-zA-Z0-9_/-]+' "$file" | sed 's/^#//' | sort -u | tr '\n' ',' | sed 's/,$//')

    # Get file modification date (Bear preserves creation date here)
    local mod_date=$(stat -f "%Sm" -t "%Y-%m-%dT%H:%M:%S" "$file" 2>/dev/null || stat -c "%y" "$file" 2>/dev/null | cut -d'.' -f1 | tr ' ' 'T')
    local date_prefix=$(echo "$mod_date" | cut -d'T' -f1)

    # Create slug from title
    local slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')

    # Create output filename
    local output_file="$POSTS_DIR/${date_prefix}-${slug}.md"

    # Extract body (everything after first H1, removing inline tags)
    local body=$(sed '1{/^# /d}' "$file" | sed 's/#[a-zA-Z0-9_/-]*#\?//g')

    # Create front matter
    cat > "$output_file" << EOF
---
title: "$title"
date: ${mod_date}-08:00
draft: false
EOF

    # Add tags if present
    if [ -n "$tags" ]; then
        echo "tags: [$(echo "$tags" | sed 's/,/", "/g' | sed 's/^/"/' | sed 's/$/"/' )]" >> "$output_file"
    fi

    # Add description (first 150 chars of body)
    local desc=$(echo "$body" | tr '\n' ' ' | sed 's/  */ /g' | cut -c1-150 | sed 's/"//g')
    echo "description: \"${desc}...\"" >> "$output_file"

    echo "---" >> "$output_file"
    echo "" >> "$output_file"
    echo "$body" >> "$output_file"

    echo "  → Created: $output_file"
}

# Process all markdown files
export -f process_file
export POSTS_DIR

count=0
for file in "$SOURCE_DIR"/*.md; do
    if [ -f "$file" ]; then
        process_file "$file"
        ((count++))
    fi
done

echo ""
echo "Done! Processed $count files."
echo ""
echo "Next steps:"
echo "  1. Review imported posts in $POSTS_DIR"
echo "  2. Run 'hugo server -D' to preview"
echo "  3. Adjust dates/tags as needed"
