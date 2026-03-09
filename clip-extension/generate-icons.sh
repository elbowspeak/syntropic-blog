#!/bin/bash
# Generate extension icons from SVG
# Requires: rsvg-convert (brew install librsvg) or just use the SVG directly

cd "$(dirname "$0")"

cat > icon.svg << 'SVG'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <rect width="128" height="128" rx="16" fill="#262624"/>
  <text x="64" y="88" text-anchor="middle" font-family="system-ui" font-size="72" font-weight="700" fill="#D4A04A">S</text>
</svg>
SVG

for size in 16 48 128; do
  if command -v rsvg-convert &> /dev/null; then
    rsvg-convert -w $size -h $size icon.svg > "icon${size}.png"
  elif command -v sips &> /dev/null; then
    # macOS fallback — convert SVG via sips (limited but works)
    cp icon.svg "icon${size}.svg"
    echo "SVG created. Convert manually or install librsvg: brew install librsvg"
  fi
done

echo "Icons generated."
