$(document).ready(function () {
    $(".open-header").click(function(e){ 
      $("#mySidenav").toggleClass('humbergerg');
        
    });
   $(".header__center-close").click(function(e){ 
      $("#mySidenav").removeClass('humbergerg');		
    }
    ); console.log("DSss")
  });

  function hidecard(){
    let a=document.getElementById('hide').style.display='none';
  console.log(a);
  }