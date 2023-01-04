
setTimeout(function(){
$('#myModal').modal('show');
}, 2000); // 2000 milliseconds = 2 seconds

$(document).ready(function () {
    $(".open-header").click(function(e){ 
      $("#mySidenav").toggleClass('humbergerg');
        
    });
   $(".header__center-close").click(function(e){ 
      $("#mySidenav").removeClass('humbergerg');		
    }
    ); console.log("DSss")
  });