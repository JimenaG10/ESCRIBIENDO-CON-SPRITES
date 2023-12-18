var nom1, nom2, nom3, nom4, nom5, nom6, nom7, nom8, nom9, nom10;

function preload(){

}

function setup() {
  createCanvas(600, 400);
  //Letra "A"
  nom1 = createSprite(45, 200, 30, 150);
  nom1.shapeColor = "yellow";
  nom2 = createSprite(115, 200, 30, 150);
  nom2.shapeColor = "yellow";
  nom3 = createSprite(80, 120, 100, 30);
  nom3.shapeColor = "pink";
  nom4 = createSprite(80, 200, 40, 30);
  nom4.shapeColor = "white";
  //Letra "L"
  nom5 = createSprite(200, 190, 30, 170);
  nom5.shapeColor = "cyan";
  nom6 = createSprite(250, 260, 70, 30);
  nom6.shapeColor = "white";
  //Letra "E"
  nom7 = createSprite(350, 200, 30, 150);
  nom7.shapeColor = "purple";
  nom8 = createSprite(405, 120, 140, 30);
  nom8.shapeColor = "pink";
  nom9 = createSprite(415, 200, 100, 30);
  nom9.shapeColor = "white";
  nom10 = createSprite(405, 260, 140, 30);
  nom10.shapeColor = "cyan";
}


function draw() {
  background("black");

  drawSprites();
  
}