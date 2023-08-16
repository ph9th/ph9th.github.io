  document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    let navPos = navbar.getBoundingClientRect().top;
    const headerDiv = document.getElementById("header");
    let headerPos = headerDiv.offsetTop;

    window.addEventListener("scroll", e => {
      let scrollPos = window.scrollY;
      if (scrollPos > navPos) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      if (scrollPos > headerPos) {
        navbar.classList.add('sticky-bg');
      } else {
        navbar.classList.remove('sticky-bg');
      }

    });
})
