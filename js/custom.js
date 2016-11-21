var slideIndex = 1;
showSlidesFirst(slideIndex);

function plusSlidesFirst(n) {
  showSlidesFirst(slideIndex += n);
}

function currentSlideFirst(n) {
  showSlidesFirst(slideIndex = n);
}

function showSlidesFirst(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-first");
  var dots = document.getElementsByClassName("dot-first");
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

//                                                                                          

var slideIndex = 1;
showSlidesSecond(slideIndex);

function plusSlidesSecond(n) {
  showSlidesSecond(slideIndex += n);
}

function currentSlideSecond(n) {
  showSlidesSecond(slideIndex = n);
}

function showSlidesSecond(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-second");
  var dots = document.getElementsByClassName("dot-second");
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

//                                                                                          

var slideIndex = 1;
showSlidesThird(slideIndex);

function plusSlidesThird(n) {
  showSlidesThird(slideIndex += n);
}

function currentSlideThird(n) {
  showSlidesThird(slideIndex = n);
}

function showSlidesThird(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-third");
  var dots = document.getElementsByClassName("dot-third");
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

//                                                                                          

var slideIndex = 1;
showSlidesFourth(slideIndex);

function plusSlidesFourth(n) {
  showSlidesFourth(slideIndex += n);
}

function currentSlideFourth(n) {
  showSlidesFourth(slideIndex = n);
}

function showSlidesFourth(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-fourth");
  var dots = document.getElementsByClassName("dot-fourth");
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

//                                                                                          

var slideIndex = 1;
showSlidesFith(slideIndex);

function plusSlidesFith(n) {
  showSlidesFith(slideIndex += n);
}

function currentSlideFith(n) {
  showSlidesFith(slideIndex = n);
}

function showSlidesFith(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-fith");
  var dots = document.getElementsByClassName("dot-fith");
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