// Handle cursor behavior
const cursor = document.querySelector('.cursor');
const HIDE_CURSOR_CLASS = 'hide-cursor';

const moveCursor = (e)=> {
  const mouseY = e.clientY - 18;
  const mouseX = e.clientX - 18;
  
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  // Check if the cursor is over an interactive element
const isInteractiveElement = e.target.closest('a, button, [role="button"], input[type="submit"], input[type="button"], .switch');

if (isInteractiveElement) {
  document.documentElement.classList.add(HIDE_CURSOR_CLASS);
  cursor.classList.add('triangle');
} else {
    document.documentElement.classList.remove(HIDE_CURSOR_CLASS);
    cursor.classList.remove('triangle');
}

};

window.addEventListener('load', function () {
  window.addEventListener('mousemove', moveCursor);
window.addEventListener('mouseleave', () => {
  document.documentElement.classList.add(HIDE_CURSOR_CLASS);
});
window.addEventListener('mouseenter', () => {
  document.documentElement.classList.remove(HIDE_CURSOR_CLASS);
});
})