document.addEventListener('DOMContentLoaded', function() {
  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      displayProjects(projects, 'all-projects');
    })
    .catch(error => console.error('Error fetching the projects:', error));
});
