/* Image Carousel, not sure if we can use JQuery, so  doing from scratch */

var imageCarousel = {};

imageCarousel.next = function() {
  var myCarousel = document.getElementById("image-carousel");

  myCarousel.scrollLeft += 560;

};

imageCarousel.prev = function() {
  var myCarousel = document.getElementById("image-carousel");

  myCarousel.scrollLeft -= 560;
};

imageCarousel.loadImages = function() {
  var myCarousel = document.getElementById("image-carousel");

  for(var i = 1; i < 8; i++){
    var img = document.createElement('div');
    img.style.backgroundImage = "url(" + "images/carousel/" + i + ".jpg" + ")";
    img.className = "thumbnail";
    myCarousel.appendChild(img);
  }
  
  var leftButton = document.getElementById("left-button");
  var rightButton = document.getElementById("right-button");

  leftButton.addEventListener("click", imageCarousel.prev);
  rightButton.addEventListener("click", imageCarousel.next);



};


window.onload = function() {
  imageCarousel.loadImages();
}