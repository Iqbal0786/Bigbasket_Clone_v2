// variable to store index
var slideIndex = 0;
// calling the function
Slides();
// creating the function which contains code to slide the images
function Slides() {
  var i;
  var slides = document.getElementsByClassName("Slide");
  var dots = document.getElementsByClassName("circle");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(Slides, 2000); // Change image every 2 seconds
}