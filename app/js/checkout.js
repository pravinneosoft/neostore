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