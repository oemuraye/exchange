// const dropdown = document.querySelector('.dropdownMenuLink')
// const dropdownArrow = document.querySelectorAll(".dropdown-arrow");


// //hamburger toggle
// dropdown.addEventListener("click", () => {
//     dropdownArrow.classList.remove("fa-angle-down");
//     dropdownArrow.classList.add("fa-angle-up");

//   if (dropdown.classList.contains("show")) {
//     dropdownArrow.classList.remove("fa-angle-up");
//     dropdownArrow.classList.add("fa-angle-down");
// }
// });


// Navbar background change 
const myNav = document.querySelector(".header-navbar");

window.onscroll = () => {
  "use strict";
  if (
    document.body.scrollTop >= 400 ||
    document.documentElement.scrollTop >= 75
  ) {
    myNav.classList.add("navbar-color-onscroll");
    myNav.classList.remove("navbar-default-color");
    backToTopBtn.style.display = "block";
  } else {
    myNav.classList.add("navbar-default-color");
    myNav.classList.remove("navbar-color-onscroll");
    backToTopBtn.style.display = "none";
  }
};


//  the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.querySelector('.close-button')

// When the user clicks the button, open the modal 
btn.onclick = () => {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    console.log(span);
    modal.style.display = "none";
    console.log(span);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});