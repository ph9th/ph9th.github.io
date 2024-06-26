document.addEventListener('DOMContentLoaded', function() {

  $("#navbar").load("navbar.html", function () {
    const themeToggleBtn = document.querySelector("[data-theme-toggle]");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    } else {
      console.error('Theme toggle button not found');
    }
  });

  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      displayProjects(projects, 'all-projects');
    })
    .catch(error => console.error('Error fetching the projects:', error));
});
