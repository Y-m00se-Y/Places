var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  hash: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  
});
var resetButton = document.getElementById('carouselReset');
resetButton.addEventListener('click', function() {
	flkty.select(0);
});