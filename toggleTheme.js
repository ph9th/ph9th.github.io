document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeToggleBtn = document.querySelector("[data-theme-toggle]");
  if (themeToggleBtn) {
      const initialCta = savedTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
      themeToggleBtn.innerText = initialCta;
      themeToggleBtn.setAttribute("aria-label", initialCta);
      themeToggleBtn.addEventListener('click', toggleTheme);
  }
});

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const newCta = newTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
  const themeToggleBtn = document.querySelector("[data-theme-toggle]");
  if (themeToggleBtn) {
      themeToggleBtn.innerText = newCta;
      themeToggleBtn.setAttribute("aria-label", newCta);
  }
}
