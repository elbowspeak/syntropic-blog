const CLIP_SERVER = 'http://localhost:2847/clip';

document.addEventListener('DOMContentLoaded', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;

  // Extract OG metadata from the active tab
  let meta = {};
  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const get = (name) => {
          const el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
          return el ? el.content : '';
        };
        return {
          title: get('og:title') || document.title,
          description: get('og:description') || get('description') || '',
          siteName: get('og:site_name') || new URL(window.location.href).hostname.replace(/^www\./, ''),
          image: get('og:image')
        };
      }
    });
    meta = results[0].result;
  } catch (e) {
    meta = { title: tab.title, description: '', siteName: new URL(url).hostname.replace(/^www\./, ''), image: '' };
  }

  document.getElementById('title').value = meta.title || '';
  document.getElementById('source-name').textContent = meta.siteName || new URL(url).hostname;

  const domain = new URL(url).hostname;
  document.getElementById('favicon').src = `https://www.google.com/s2/favicons?domain=${domain}&sz=16`;

  // Clip action
  const clip = async () => {
    const btn = document.getElementById('clip-btn');
    const status = document.getElementById('status');
    btn.disabled = true;
    status.textContent = 'Clipping...';
    status.className = 'status';

    const tagsRaw = document.getElementById('tags').value;
    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

    const payload = {
      title: document.getElementById('title').value,
      description: meta.description || '',
      source_url: url,
      source_name: meta.siteName,
      image: meta.image || '',
      annotation: document.getElementById('annotation').value,
      tags
    };

    try {
      const res = await fetch(CLIP_SERVER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      status.textContent = 'Clipped!';
      status.className = 'status success';
      setTimeout(() => window.close(), 800);
    } catch (err) {
      status.textContent = `Failed: ${err.message}`;
      status.className = 'status error';
      btn.disabled = false;
    }
  };

  document.getElementById('clip-btn').addEventListener('click', clip);
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') clip();
  });
});
