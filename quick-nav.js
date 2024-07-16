// Quick navigation on project pages to scroll to every section

$(document).ready(function() {

    var sectionIds = [];
    $('section[id]').each(function() {
      sectionIds.push($(this).attr('id'));
    });
  
    $('a[href*="#"]').click(function() {
      var href = $(this).attr("href");
      var targetElement = $(href);
  
      if (targetElement.length) {
        console.log(targetElement.offset().top);
        var offsetTop = targetElement.offset().top - 50;
        $("html, body").animate(
          {
            scrollTop: offsetTop,
          },
          500
        );
        return false;
      } else {
        console.log("Target element not found");
      }
    });
  
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      $("nav li a").removeClass("active");
  
      for (var i = 0; i < sectionIds.length; i++) {
        var sectionId = sectionIds[i];
        if (windowpos >= $('#' + sectionId).offset().top) {
          $('a[href="#' + sectionId + '"]').addClass("active");
        }
      }
    });
  });
  