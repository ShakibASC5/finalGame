var actionMan;
var bkg;

function preload() {
var walkAnimation = loadAnimation (
  "./images/hero_walk_1.png",
  "./images/hero_walk_2.png",
  "./images/hero_walk_3.png",
  "./images/hero_walk_4.png",
  "./images/hero_walk_5.png",
  "./images/hero_walk_6.png",
);

actionMan = createSprite(0, 0, 85, 85)
actionMan.addAnimation("walk", walkAnimation)



}

// bkg = loadImage
function setup() {

    var canvas = createCanvas(500, 500);
    canvas.parent('#container');
    bkg = loadImage();
    actionMan.position.x = width /2;
    actionMan.position.y= height -150;






}

function draw() {







background("red");
drawSprites();
}