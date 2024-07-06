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

      const container = document.getElementById('header');
      const circle = document.getElementById('circle');

      const containerRect = container.getBoundingClientRect();

      const circleRadius = circle.offsetWidth / 2;

      let x = Math.random() * (containerRect.width - circleRadius * 2);
      let y = Math.random() * (containerRect.height - circleRadius * 2);
      let dx = 1; 
      let dy = 1; 
      let targetX = x;
      let targetY = y; 
      let isFollowingCursor = false; 


      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;


      function moveCircle() {
          // Check if the circle should follow the cursor
          if (isFollowingCursor) {

              const distX = targetX - x;
              const distY = targetY - y;
              const distance = Math.sqrt(distX * distX + distY * distY);

              console.log(distance);
              
              if (distance < 100) {
                  isFollowingCursor = false;
              } else {

                  const speed = 1;
                  dx = (distX / distance) * speed;
                  dy = (distY / distance) * speed;
              }
          }

          x += dx;
          y += dy;

          if (x + circleRadius >= containerRect.width || x <= -circleRadius) {
              dx = -dx;
          }

          if (y + circleRadius >= containerRect.height || y <= -circleRadius) {
              dy = -dy;
          }

          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;

          requestAnimationFrame(moveCircle);
      }

    container.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX - containerRect.left - circleRadius;
        const mouseY = event.clientY - containerRect.top - circleRadius; 
        targetX = mouseX;
        targetY = mouseY;
        isFollowingCursor = true;
    });

     
      moveCircle();

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

  //Load first 3 projects
  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      const firstFourProjects = projects.slice(0, 3);
      displayProjects(firstFourProjects, 'projects'); 
    })
    .catch(error => console.error('Error fetching the projects:', error));


});




