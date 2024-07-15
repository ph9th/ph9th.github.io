document.addEventListener('DOMContentLoaded', function () {
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



    var container = document.querySelector('.mockupContainer');
    var mockupImg = document.getElementById('mockupImg');
    var imgText = document.getElementById('imgtext');
  
    document.querySelector('.row').addEventListener('click', function (e) {
        var target = e.target;
        if (target.tagName === 'IMG') {
            showMockup(target);
        } else if (target.classList.contains('overlay') || target.classList.contains('text')) {
            var img = target.closest('.img-container').querySelector('img');
            if (img) {
                showMockup(img);
            }
        }
    });

    function showMockup(img) {
        mockupImg.src = img.src;
        // imgText.innerHTML = img.alt;
        container.style.display = 'block';


        mockupImg.classList.remove('visible');
        mockupImg.classList.add('fade-in');
        void mockupImg.offsetHeight;  
        mockupImg.classList.add('visible');
    }

   
});

document.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    lastKnownScrollPosition = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }
  });
