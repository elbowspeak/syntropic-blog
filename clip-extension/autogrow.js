const ta = document.getElementById('annotation');
function autoGrow() {
  ta.style.height = 'auto';
  ta.style.height = Math.max(80, ta.scrollHeight) + 'px';
  document.body.style.height = 'auto';
}
ta.addEventListener('input', autoGrow);
ta.addEventListener('paste', () => setTimeout(autoGrow, 0));
