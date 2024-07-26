function displayProjects(projects, containerId) {
    const projectsContainer = document.getElementById(containerId);
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.classList.add('fade-in');
  
      projectElement.innerHTML = `
        <div class="project-img">
          <a href="${project.link}"><img src="${project.image}" /></a>
        </div>
        <div class="project-description">
          <h3><a href="${project.link}" data-content="${project.title}">${project.title}</a></h3>
          <p>${project.description}</p>
          <ul class="keywords">
            ${project.keywords.map(keyword => `<li>${keyword}</li>`).join('')}
          </ul>
        </div>
      `;
      projectsContainer.appendChild(projectElement);
    });
    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log('Element intersecting:', entry.target); 
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.4 });

    // Observe each project element
    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach(project => {
      observer.observe(project);
      // console.log('Observing:', project);
    });
  }


  