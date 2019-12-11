var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
var slideIndexx = 0;
showSlides();

function showSlidess() {
    var i;
    var slidess = document.getElementsByClassName("mySlides");
    var dotss = document.getElementsByClassName("dot");
    for (i = 0; i < slidess.length; i++) {
       slidess[i].style.display = "none";  
    }
    slideIndexx++;
    if (slideIndexx > slidess.length) {slideIndexx = 1}    
    for (i = 0; i < dots.length; i++) {
        dotss[i].className = dotss[i].className.replace(" active", "");
    }
    slidess[slideIndexx-1].style.display = "block";  
    dotss[slideIndexx-1].className += " active";
    setTimeout(showSlidess(, 3500); // Change image every 2 seconds
}