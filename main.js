document.addEventListener('DOMContentLoaded', function() {
  fetch('projects.json')
      .then(response => response.json())
      .then(projects => {
          const projectsContainer = document.getElementById('projects');
          projects.forEach(project => {
              const projectElement = document.createElement('div');
              projectElement.classList.add('project');

              projectElement.innerHTML = `
                  <div class="project-img">
                  <a href="${project.link}"><img src="${project.image}" /></a>
                 
                  </div>
                  <div class="project-description">
                      <h3>${project.title}</h3>
                      <p>${project.description}</p>
                      <ul class="keywords">
                          ${project.keywords.map(keyword => `<li>${keyword}</li>`).join('')}
                      </ul>
                      
                  </div>
              `;
              projectsContainer.appendChild(projectElement);
          });
      })
      .catch(error => console.error('Error fetching the projects:', error));
});
