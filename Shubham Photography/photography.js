// Initialize the carousel manually using JavaScript
var carousel = document.querySelector('#carouselExampleControls');
var myCarousel = new bootstrap.Carousel(carousel, {
  interval: 5000, // Change slide every 5 seconds
  wrap: true // Enable looping
});