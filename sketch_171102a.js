var canvas;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(1);
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  //noStroke();
 // ortho(0, 0, 0, 0, 100, 0);
  background(175);
  
}

function keyPressed() {
  clear();
}

function draw() {
  //background(0);
  background(246, 246, 246, 80);
  //background(246, 246, 0);
 
  var dirX = (mouseX / width - 0.5) *2;
  var dirY = (mouseY / height - 0.5) *(-2);
  ambientLight(250,250,250);
  directionalLight(250, 250, 250, 0, 0, 0.25);



  if (mouseIsPressed) {

    console.log("x: "+dirX," y: "+dirY);
  }
  // var vol = mic.getLevel();
  // ellipse(width / 2, height / 2, vol * width);
  //metodo.display();
  //metodo.move();
  ambientMaterial(200,200,200);
  //fill(255,0,0);
  push();
  translate(pmouseX-(windowWidth/2),pmouseY-(windowHeight/2),0);
  sphere(50,20);
  pop();
}

var metodo = {

  diametro: 10,
  x: -500,
  y: 0,

  display: function display() {
    fill(0);
    ellipse(this.x, this.y, this.diametro, this.diametro);
  },

  move: function display() {
    this.x++;
  }



}