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