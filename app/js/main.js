// Submenu js start
document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
  
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
  
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
          })
    });
  
  }
  // end if innerWidth
  }); 
// Submenu js end
// Owl carousel Js start
$('.banner-carousel').owlCarousel({
  autoplay:false,
autoplayTimeout:3500 ,
  loop: true,
  items: 1,
  dots: false,
  margin: 10,
  nav: true,});

// Owl carousel Js end

//countdown timer
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
  // seconds=document.style.color="red";
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

//store carousel
$('.store-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2,
          stagePadding: 50
      },
      1000:{
          items:4,
          stagePadding: 100
      }
  }
})
//show and hide div
// const el = document.getElementById('show');
// const hiddenDiv = document.getElementsByClassName('hidden');
// el.addEventListener('mouseover', function handleMouseOver() {
//   hiddenDiv.style.display = 'block';
// });
// el.addEventListener('mouseout', function handleMouseOut() {
//   hiddenDiv.style.display = 'none';
// });

// function openNav() {
//   document.getElementById("mySidenav").style.display = "block";
//   document.getElementById("mySidenav").style.transition = " display 1s ease-in-out";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.display = "none";
//   document.getElementById("mySidenav").style.transition = " display 1s ease-in-out";
//   // location.reload();
// }

$(document).ready(function () {
  $(".open-header").click(function(e){ 
    $("#mySidenav").toggleClass('humbergerg');
      
  });
 $(".header__center-close").click(function(e){ 
    $("#mySidenav").removeClass('humbergerg');		
  }
  ); console.log("DSss")
});













function changecolor(){
  document.getElementById("my").style.color="red";
}
function checkbox(){
  document.getElementById("checked").style.color="red";
}


//scrolling effect of header
document.addEventListener("DOMContentLoaded", () => {
  headerScroll();
});

console.log("header2");
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