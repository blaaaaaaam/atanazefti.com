window.addEventListener('DOMContentLoaded', () => {
  var lazyLoadInstance = new LazyLoad({});
})

function toggle(el) {
  el.nextElementSibling.classList.toggle('visible')
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(255);
  strokeCap(2);
}

function draw() {
  var r = random(255);
  var g = random(255);
  var b = random(255);

  var mix = (r + g + b)/3;
  var mixNew = mix + 2*random(100);
  var mixRatio = (mixNew/mix);
  var r2 = r * mixRatio;
  var g2 = g * mixRatio;
  var b2 = b * mixRatio;

  strokeWeight(abs((pmouseX-mouseX)));
  stroke(r2, g2, b2);
  line(mouseX,mouseY, pmouseX,pmouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
