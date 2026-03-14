const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const REPO_DIR = path.join(__dirname);

function gitPush(filePath) {
  const file = path.relative(REPO_DIR, filePath);
  execFile('git', ['pull', '--rebase'], { cwd: REPO_DIR }, (err) => {
    if (err) console.error('git pull failed:', err.message);
    execFile('git', ['add', file], { cwd: REPO_DIR }, (err) => {
      if (err) return console.error('git add failed:', err.message);
      execFile('git', ['commit', '-m', `clip: ${path.basename(file, '.md')}`], { cwd: REPO_DIR }, (err) => {
        if (err) return console.error('git commit failed:', err.message);
        execFile('git', ['push'], { cwd: REPO_DIR }, (err) => {
          if (err) return console.error('git push failed:', err.message);
          console.log(`Pushed: ${file}`);
        });
      });
    });
  });
}

const PORT = 2847;
const OUTPUT_DIR = path.join(__dirname, 'content', 'readings');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function uniquePath(dir, slug) {
  let name = `${slug}.md`;
  let full = path.join(dir, name);
  let i = 2;
  while (fs.existsSync(full)) {
    name = `${slug}-${i}.md`;
    full = path.join(dir, name);
    i++;
  }
  return full;
}

function toFrontmatter(data) {
  const date = new Date().toISOString().slice(0, 10);
  const tags = data.tags && data.tags.length
    ? `\ntags:\n${data.tags.map(t => `  - "${t}"`).join('\n')}`
    : '';
  const desc = data.description
    ? `\ndescription: "${data.description.replace(/"/g, '\\"')}"`
    : '';
  return `---
title: "${data.title.replace(/"/g, '\\"')}"
date: ${date}
source_url: "${data.source_url}"
source_name: "${data.source_name}"${desc}
image: "${data.image || ''}"${tags}
---

${data.annotation || ''}
`;
}

const server = http.createServer((req, res) => {
  // CORS for extension
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/clip') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (!data.title || !data.source_url) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'title and source_url required' }));
          return;
        }

        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        const slug = slugify(data.title);
        const filePath = uniquePath(OUTPUT_DIR, slug);
        fs.writeFileSync(filePath, toFrontmatter(data), 'utf8');

        console.log(`Clipped: ${path.basename(filePath)}`);
        gitPush(filePath);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, file: path.basename(filePath) }));
      } catch (err) {
        console.error('Clip error:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Clip server running on http://localhost:${PORT}`);
  console.log(`Writing to: ${OUTPUT_DIR}`);
});
