var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  console.log(window.pageYOffset );
  console.log(window.scrollTop);

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
console.log("sup");    }
});

window.onscroll = function(ev) {
    
};