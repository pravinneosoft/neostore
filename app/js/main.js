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
$('.owl-carousel').owlCarousel({
  autoplay:false,
autoplayTimeout:3500 ,
  loop: true,
  items: 1,
  dot: true,
  margin: 10,
  nav: true,});
function toggleVideo({ currentTarget: wrapper }) {
  let video = wrapper.querySelector('.humans-video');
  let playpause = wrapper.querySelector('.humans-playvideo');
  if (video.paused) {
    video.play();
    playpause.setAttribute('hidden', '');
  } else {
    video.pause();
    playpause.removeAttribute('hidden');
  }
}
// Owl carousel Js end
