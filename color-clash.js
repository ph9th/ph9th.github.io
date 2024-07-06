document.addEventListener('DOMContentLoaded', function() {

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


//     projectElement.classList.add('fade-in');
//  
});
  