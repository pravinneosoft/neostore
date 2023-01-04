$(".address__nav ul li").on("click", function() {
    $(".address__nav ul li").removeClass("address__active");
    $(this).addClass("address__active");
  });

  $(document).ready(function () {
    $(".open-header").click(function(e){ 
      $("#mySidenav").toggleClass('humbergerg');
        
    });
   $(".header__center-close").click(function(e){ 
      $("#mySidenav").removeClass('humbergerg');		
    }
    ); console.log("DSss")
  });

  function headerScroll() {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header__bottom");
      const windowScrollY = window.scrollY;
      const SCROLL_HEIGHT = 50;
      if (windowScrollY < SCROLL_HEIGHT) {
        header.classList.remove("scrolleffect");
      } else {
        header.classList.add("scrolleffect");
      }
    });
  };
  headerScroll();