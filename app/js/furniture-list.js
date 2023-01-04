//responsive header start
document.addEventListener("DOMContentLoaded", () => {
  headerScroll();
});

console.log("header2");
function headerScroll() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header__bottom");
    const windowScrollY = window.scrollY;
    const SCROLL_HEIGHT = 43;
    if (windowScrollY < SCROLL_HEIGHT) {
      header.classList.remove("scrollEffect");
    } else {
      header.classList.add("scrollEffect");
    }
  });
};
headerScroll();
// navigation menu code
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("mySidenav").style.transition = " display 1s ease-in-out";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("mySidenav").style.transition = " display 1s ease-in-out";
}
//responsive header end


// furniture card icon display start
// let showicon = (x) => {
//   let myicon = document.querySelectorAll(".product-card-icon");
//   myicon.style.display = "block";
//   myicon = x;
//   myicon.forEach(element => {

//     console.log(element)
//   });

// }
// let hideicon = (x) => {
//   let myicons = document.querySelectorAll(".product-card-icon");
//   myicons.style.display = "none";
//   myicons = x;
//   myicons.forEach(element => {

//     console.log(element)
//   });
// }
// let showicon = (x) => {
//   let elems = document.querySelectorAll(".product-card-icon");
//   console.log(...elems);
//   console.log(typeof (elems));

//   elems.forEach(element => {
//     // elems.document.style.display="block";
//     // console.log(element);
//   });
//   elems=x;
// }
// let hideicon = (x) => {
//   let elems1 = document.querySelectorAll(".product-card-icon");
//   console.log(...elems1);
//   console.log(typeof (elems1))
//   elems1.forEach(element => {
//     elems1.document.style.display="none";
//     console.log(element)
//   });
//   elems1=x;
// }
// furniture card icon display end




// pagination internal page link js start
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll(".product__right-content");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 9;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("pagination-hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("pagination-hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

// pagination internal page link js end

//zoom in and zoom out effect
$(document).ready(function(){
  $("#zoominbtn").click(function(){
       $("img").width($("img").width()+100);
       $("img").height($("img").height()+100);
  });
  $("#zoomoutbtn").click(function(){
       $("img").width($("img").width()-100);
       $("img").height($("img").height()-100);
  });   
});


// view icon active and deactive
var btnContainer = document.getElementById("view");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("view-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("view-active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function openfilter(){
  document.getElementById('sidenav').style.display="block";
}

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

setTimeout(function(){
  $('#myModal').modal('show');
  }, 2000); // 2000 milliseconds = 2 seconds