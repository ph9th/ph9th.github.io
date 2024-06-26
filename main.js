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
  $("#navbar").load("navbar.html", function () {
    const themeToggleBtn = document.querySelector("[data-theme-toggle]");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    } else {
      console.error('Theme toggle button not found');
    }
  });
  $("#footer").load("footer.html");

  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      const firstFourProjects = projects.slice(0, 4);
      displayProjects(firstFourProjects, 'projects'); 
    })
    .catch(error => console.error('Error fetching the projects:', error));

      

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

      
});


