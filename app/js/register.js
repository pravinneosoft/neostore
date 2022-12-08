//scrolling effect of header
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