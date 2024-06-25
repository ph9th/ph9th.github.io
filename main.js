document.addEventListener('DOMContentLoaded', function() {
  fetch('projects.json')
      .then(response => response.json())
      .then(projects => {
          const projectsContainer = document.getElementById('projects');
          const firstFourProjects = projects.slice(0, 4);
          firstFourProjects.forEach(project => {
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

      const greetings = ["Hi,", "Hallo,", "Xin chào,"];
  let greetingIndex = 0;
  const typingSpeed = 150; // typing speed in milliseconds
  const backspaceSpeed = 100; // backspace speed in milliseconds
  const pauseDuration = 2000; // pause duration before switching to next greeting
  const greetingElement = document.querySelector(".greeting");
  
  function typeWriter(text, index, callback) {
    if (index < text.length) {
      greetingElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">&nbsp;</span>';
      setTimeout(() => typeWriter(text, index + 1, callback), typingSpeed);
    } else if (typeof callback === "function") {
      setTimeout(callback, pauseDuration);
    }
  }

  function deleteText(text, index, callback) {
    if (index >= 0) {
      greetingElement.innerHTML = text.substring(0, index) + '<span class="cursor">&nbsp;</span>';
      setTimeout(() => deleteText(text, index - 1, callback), backspaceSpeed);
    } else if (typeof callback === "function") {
      callback();
    }
  }

  function loopGreetings() {
    typeWriter(greetings[greetingIndex], 0, function() {
      setTimeout(function() {
        deleteText(greetings[greetingIndex], greetings[greetingIndex].length, function() {
          greetingIndex = (greetingIndex + 1) % greetings.length;
          loopGreetings();
        });
      }, pauseDuration);
    });
  }

  loopGreetings();
});
