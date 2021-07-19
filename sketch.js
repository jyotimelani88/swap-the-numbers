var a = prompt("Enter the vaue of first no");
var b = prompt("Enter the second value")
var c;


function setup() {
  createCanvas(400, 400);
  c = createButton("Swap the numbers");
  c.mousePressed(swap);
}

function draw() {
  background(220);
}
function swap(){
  [a,b] = [b,a]
  console.log("The value of a is  " +a)
  console.log("The value of b is  " +b)
}