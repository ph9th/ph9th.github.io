document.addEventListener("DOMContentLoaded", function () {
  $("#navbar").load("navbar.html", function () {
    const themeToggleBtn = document.querySelector("[data-theme-toggle]");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", toggleTheme);
    } else {
      console.error("Theme toggle button not found");
    }
  });

  //Load footer
  $("#footer").load("footer.html");

  var container = document.querySelector(".mockupContainer");
  var mockupImg = document.getElementById("mockupImg");

  document.querySelector(".row").addEventListener("click", function (e) {
    var target = e.target;
    if (target.tagName === "IMG") {
      showMockup(target);
    } else if (
      target.classList.contains("overlay") ||
      target.classList.contains("text")
    ) {
      var img = target.closest(".img-container").querySelector("img");
      if (img) {
        showMockup(img);
      }
    }
  });

  function showMockup(img) {
    mockupImg.src = img.src;
    container.style.display = "block";
  }

  
})
