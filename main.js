document.addEventListener('DOMContentLoaded', function() {
  //Load Header and add typewriter animation
  $("#header").load("header.html", function(){
    const greetings = ["Hi,", "Hallo,", "Xin chào,"];
      let greetingIndex = 0;
      const typingSpeed = 150; 
      const backspaceSpeed = 100; 
      const pauseDuration = 2000; 
      const greetingElement = document.querySelector(".greeting");
      
      function typeWriter(text, index, callback) {
        if (index < text.length) {
          greetingElement.innerHTML = text.substring(0, index + 1) + '<span class="tw-cursor">&nbsp;</span>';
          setTimeout(() => typeWriter(text, index + 1, callback), typingSpeed);
        } else if (typeof callback === "function") {
          setTimeout(callback, pauseDuration);
        }
      }

      function deleteText(text, index, callback) {
        if (index >= 0) {
          greetingElement.innerHTML = text.substring(0, index) + '<span class="tw-cursor">&nbsp;</span>';
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
  //Load navigation bar and add event listener for theme toggle
  $("#navbar").load("navbar.html", function () {
    const themeToggleBtn = document.querySelector("[data-theme-toggle]");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    } else {
      console.error('Theme toggle button not found');
    }
  });

  //Load footer
  $("#footer").load("footer.html");

  //Load first 4 projects
  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      const firstFourProjects = projects.slice(0, 4);
      displayProjects(firstFourProjects, 'projects'); 
    })
    .catch(error => console.error('Error fetching the projects:', error));

      

      

});


