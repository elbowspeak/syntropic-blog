const ta = document.getElementById('annotation');
function autoGrow() {
  ta.style.height = '80px';
  const newHeight = Math.min(300, Math.max(80, ta.scrollHeight));
  ta.style.height = newHeight + 'px';
}
ta.addEventListener('input', autoGrow);
ta.addEventListener('paste', () => setTimeout(autoGrow, 0));
