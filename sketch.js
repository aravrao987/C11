var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
//creating new and false ground for trex to walk on
var ground2
function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
}
function setup() {
createCanvas(600, 200);
//create a trex sprite
trex = createSprite(50,170,20,55);
trex.addAnimation("running", trex_running);
//controls the size of the trex
trex.scale = 0.5;
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.velocityX = -4;
ground2 = createSprite(200, 190, 400, 5);
//we will now not be able to see the false ground
ground2.visible = false;
}
function draw() {
background(220);
//jump when the space button is pressed
console.log(trex.y);
//provides a specific value so that trex does not exceed limits
if (keyDown("space") && trex.y>=164) {
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8
if (ground.x < 0) {
ground.x = ground.width / 2;
}
//trex to collide with new/false ground to give a walking effect
trex.collide(ground2);
drawSprites();

}
