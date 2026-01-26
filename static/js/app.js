/**
 * The Syntropic Lens - Blog Navigation
 * Vanilla JS for list-detail navigation, keyboard nav, and history management
 */

(function() {
  'use strict';

  // State
  let posts = [];
  let selectedIndex = 0;

  // DOM Elements
  const app = document.querySelector('.app');
  const postList = document.querySelector('.post-list');
  const articleContent = document.getElementById('article-content');
  const postsDataEl = document.getElementById('posts-data');
  const announcement = document.getElementById('article-announcement');

  // Initialize
  function init() {
    if (!postsDataEl) return;

    try {
      posts = JSON.parse(postsDataEl.textContent);
    } catch (e) {
      console.error('Failed to parse posts data:', e);
      return;
    }

    if (posts.length === 0) return;

    initListNavigation();
    initKeyboardNav();
    initHistoryHandling();
    initFromURL();
    initMobileView();
  }

  // Load post content into reader pane
  function loadPost(slug, pushState = true) {
    const post = posts.find(p => p.slug === slug);
    if (!post) return;

    // Update selected state in list
    const items = postList.querySelectorAll('.post-item');
    items.forEach((item, index) => {
      if (item.dataset.slug === slug) {
        item.classList.add('selected');
        selectedIndex = index;
        // Scroll into view if needed
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('selected');
      }
    });

    // Update content area
    articleContent.innerHTML = `
      <header class="article-header">
        <h1 class="article-title"><a href="${post.slug}">${escapeHtml(post.title)}</a></h1>
        <p class="article-meta">
          <time>${post.date}</time>
          <span class="separator">•</span>
          <span class="reading-time">${post.readingTime} min read</span>
        </p>
      </header>
      <div class="article-divider"></div>
      <div class="article-body prose">
        ${post.content}
      </div>
    `;

    // Update URL
    if (pushState) {
      history.pushState({ slug }, post.title, slug);
    }

    // Update document title
    document.title = `${post.title} | ${document.querySelector('.site-title')?.textContent || 'Blog'}`;

    // Announce to screen readers
    if (announcement) {
      announcement.textContent = `Now reading: ${post.title}`;
    }

    // Scroll content to top
    document.querySelector('.content')?.scrollTo(0, 0);

    // Mobile: switch to article view
    if (window.innerWidth <= 768) {
      app.classList.remove('is-list-view');
      app.classList.add('is-article-view');
    }
  }

  // Handle list item clicks
  function initListNavigation() {
    postList.addEventListener('click', (e) => {
      const item = e.target.closest('.post-item');
      if (item) {
        loadPost(item.dataset.slug);
      }
    });

    // Also handle Enter key on focused items
    postList.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const item = e.target.closest('.post-item');
        if (item) {
          loadPost(item.dataset.slug);
        }
      }
    });
  }

  // Keyboard navigation
  function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      // Only handle if not in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const items = postList.querySelectorAll('.post-item');
      if (items.length === 0) return;

      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        loadPost(items[selectedIndex].dataset.slug);
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        loadPost(items[selectedIndex].dataset.slug);
      }
    });
  }

  // Handle browser back/forward
  function initHistoryHandling() {
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.slug) {
        loadPost(e.state.slug, false);
      } else {
        // Handle back to list on mobile
        if (window.innerWidth <= 768) {
          app.classList.add('is-list-view');
          app.classList.remove('is-article-view');
        } else {
          // Load first post on desktop
          const items = postList.querySelectorAll('.post-item');
          if (items.length > 0) {
            loadPost(items[0].dataset.slug, false);
          }
        }
      }
    });
  }

  // Handle initial page load
  function initFromURL() {
    const path = window.location.pathname;
    const items = postList.querySelectorAll('.post-item');

    // Find matching post
    let found = false;
    items.forEach((item, index) => {
      if (item.dataset.slug === path || item.dataset.slug === path + '/') {
        item.classList.add('selected');
        selectedIndex = index;
        found = true;
        // Replace state so back button works
        history.replaceState({ slug: item.dataset.slug }, '', item.dataset.slug);
      }
    });

    // If on homepage or no match, select first post (desktop only)
    if (!found && items.length > 0) {
      if (window.innerWidth > 768) {
        items[0].classList.add('selected');
        selectedIndex = 0;
        // Don't change URL on homepage
      }
    }
  }

  // Mobile view handling
  function initMobileView() {
    if (window.innerWidth <= 768) {
      const path = window.location.pathname;
      const isArticle = posts.some(p => p.slug === path || p.slug === path + '/');

      if (isArticle) {
        app.classList.add('is-article-view');
        app.classList.remove('is-list-view');
      } else {
        app.classList.add('is-list-view');
        app.classList.remove('is-article-view');
      }
    }

    // Handle resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        app.classList.remove('is-list-view', 'is-article-view');
      }
    });
  }

  // Utility: escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
