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
// document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
// var valueCount=document.querySelector(".plus-btn").addEventListener("click", function( ) {
//            valueCount = document.getElementById("quantity").value;
//      if(valueCount++ && valueCount==11){
//       valueCount--
//        }
//        else{
//         valueCount
//        }
//     document.getElementById("quantity").value = valueCount;
//     console.log( valueCount);


//   //  let totalmaxqty= document.getAttribute('max');
//   //   console.log(totalmaxqty);
//     if (valueCount > 1)  {
//         document.querySelector(".minus-btn").removeAttribute("disabled");
//         document.querySelector(".minus-btn").classList.remove("disabled")
//     }
// })
// document.querySelector(".minus-btn").addEventListener("click", function() {
//    valueCount = document.getElementById("quantity").value;
//     valueCount--;
//     document.getElementById("quantity").value = valueCount
//     if (valueCount == 1) {
//         document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
//     }
// })

var buttonPlus  = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function() {
  console.log('inc');
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  $n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
  console.log('dec');
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
});
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

// vertical swiper slider js
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { 
	direction: 'vertical', 
	slidesPerView: 3, 
	spaceBetween: 24, // расстояние между слайдами
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
// vertical swiper slider js end






// image zoom js 
// let zoomer = function (){
//   document.querySelector('#img-zoomer-box')
//     .addEventListener('mousemove', function(e) {

//     let original = document.querySelector('#img-1'),
//         magnified = document.querySelector('#img-2'),
//         style = magnified.style,
//         x = e.pageX - this.offsetLeft,
//         y = e.pageY - this.offsetTop,
//         imgWidth = original.offsetWidth,
//         imgHeight = original.offsetHeight,
//         xperc = ((x/imgWidth) * 100),
//         yperc = ((y/imgHeight) * 100);

//         console.log('xperc',xperc);
//         console.log('yperc',yperc);

//     //lets user scroll past right edge of image
//     if(x > (.01 * imgWidth)) {
//       xperc += (.15 * xperc);
//     };

//     //lets user scroll past bottom edge of image
//     if(y >= (.01 * imgHeight)) {
//       yperc += (.15 * yperc);
//     };

//     style.backgroundPositionX = (xperc - 9) + '%';
//     style.backgroundPositionY = (yperc - 9) + '%';

//     style.left = (x - 180) + 'px';
//     style.top = (y - 180) + 'px';

//   }, false);
// }();







