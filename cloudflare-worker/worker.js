// Simple page view counter Worker
// KV namespace binding: VIEWS

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': 'https://syntropic.xyz',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    const cors = {
      'Access-Control-Allow-Origin': 'https://syntropic.xyz',
      'Content-Type': 'application/json',
    };

    // GET /stats - return all page views
    if (url.pathname === '/stats' && request.method === 'GET') {
      const list = await env.VIEWS.list();
      const stats = {};
      for (const key of list.keys) {
        stats[key.name] = parseInt(await env.VIEWS.get(key.name)) || 0;
      }
      return new Response(JSON.stringify(stats), { headers: cors });
    }

    // POST /view - increment page view
    if (url.pathname === '/view' && request.method === 'POST') {
      try {
        const { page } = await request.json();
        if (!page) {
          return new Response(JSON.stringify({ error: 'page required' }), {
            status: 400,
            headers: cors
          });
        }

        // Normalize the page path
        const normalizedPage = page.replace(/\/$/, '') || '/';

        // Increment counter
        const current = parseInt(await env.VIEWS.get(normalizedPage)) || 0;
        await env.VIEWS.put(normalizedPage, String(current + 1));

        return new Response(JSON.stringify({
          page: normalizedPage,
          views: current + 1
        }), { headers: cors });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: cors
        });
      }
    }

    return new Response(JSON.stringify({ error: 'not found' }), {
      status: 404,
      headers: cors
    });
  },
};
