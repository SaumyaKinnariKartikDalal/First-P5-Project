tint_colour = "";

function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
 
}

function draw() {
  
  image(video, 0, 0, 640, 480);
  tint(tint_colour);
}

function take_snapshot(){
  save("image.png")
  
}

function addTint(){
  tint_colour = document.getElementById("color_name").value;
}
