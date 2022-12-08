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
// navigation menu code
  function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav").style.transition = " display 1s ease-in-out";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.transition = " display 1s ease-in-out";
    // location.reload();
  }

 let showicon = (x)=>{
  const myicon =document.getElementById("social-icon")
    myicon.style.display="block";
    myicon=x;
  }
  let hideicon = (x)=>{
    const myicons =document.getElementById("social-icon")
    myicons.style.display="none";
    myicons=x;
  }