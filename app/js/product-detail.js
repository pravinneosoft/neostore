$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: false,

      autoplay: true,
      margin: 0,
      nav: true,
      dots:false,
    });
  });

// increment and decrement counter code start 
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
var valueCount
document.querySelector(".plus-btn").addEventListener("click", function() {
           valueCount = document.getElementById("quantity").value;
     valueCount++;
    document.getElementById("quantity").value = valueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }
})
document.querySelector(".minus-btn").addEventListener("click", function() {
   valueCount = document.getElementById("quantity").value;
    valueCount--;
    document.getElementById("quantity").value = valueCount
    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }
})
// increment and decrement counter code end




var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btns1");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    console.log("hh")
    this.className += " active1";
  });
}









let zoomer = function (){
  document.querySelector('#img-zoomer-box')
    .addEventListener('mousemove', function(e) {

    let original = document.querySelector('#img-1'),
        magnified = document.querySelector('#img-2'),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = ((x/imgWidth) * 100),
        yperc = ((y/imgHeight) * 100);

    //lets user scroll past right edge of image
    if(x > (.01 * imgWidth)) {
      xperc += (.15 * xperc);
    };

    //lets user scroll past bottom edge of image
    if(y >= (.01 * imgHeight)) {
      yperc += (.15 * yperc);
    };

    style.backgroundPositionX = (xperc - 9) + '%';
    style.backgroundPositionY = (yperc - 9) + '%';

    style.left = (x - 180) + 'px';
    style.top = (y - 180) + 'px';

  }, false);
}();







