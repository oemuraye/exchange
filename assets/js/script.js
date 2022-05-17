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
  } else {
    myNav.classList.add("navbar-default-color");
    myNav.classList.remove("navbar-color-onscroll");
  }
};


//  the modal
let modal = document.getElementById("myModal");
let modalContent = document.getElementById("modal-content");
let btn = document.getElementById("myBtn");
let span = document.querySelector('.close-button')

// When the user clicks the button, open the modal 
btn.onclick = () => {
  modal.style.display = "block";
  modalContent.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modalContent.style.display = "none";
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// popover future-section
let popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});