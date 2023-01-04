const popupWindow = setTimeout(function () {
  $("#myModal").modal("show");
}, 2000); // 2000 milliseconds = 2 seconds

// function stopPopup() {
//   $("#myModal").modal("hide");
// }

$(document).ready(function () {
  $(".open-header").click(function (e) {
    $("#mySidenav").toggleClass("humbergerg");
  });
  $(".header__center-close").click(function (e) {
    $("#mySidenav").removeClass("humbergerg");
  });
  console.log("DSss");
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
}
headerScroll();
