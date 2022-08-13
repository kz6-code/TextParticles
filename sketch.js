let font;
let vehicles = [];

let canvW = window.innerWidth;
let canvH = window.innerHeight;


function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(canvW, canvH);
  background(51);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();

  var points = font.textToPoints('Ali Muhammad', canvW / 3.7 , canvH / 2, 100 , {
    sampleFactor: 0.7
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }

}


function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors()
    v.update()
     v.show()
}}
