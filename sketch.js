let rocketImage;
let moonImage;
let asteroidImage;
let starBackgroundImage;

var population;

var lifespan;
var evolution = 1;

var count = 0;

var target;

var maxforce = 0.2;

var asteroidWidth = 70;
var asteroidHeight = 70;
var asteroid1XPos;
var asteroid1YPos;
var asteroid2XPos;
var asteroid2YPos;
var asteroid3XPos;
var asteroid3YPos;
var asteroid4XPos;
var asteroid4YPos;

let userInputPopulation;
let userInputLifespan;
let playButton;

let inputText1, inputText2;
var play = false;

function setup() 
{
  createCanvas(800, 600);
  
  userInputPopulation = createInput();
  userInputPopulation.position(width/2 - 65, height /2 - 80)
  userInputLifespan = createInput();
  userInputLifespan.position(width/2 - 65, height /2)
  
  playButton = createButton('Play');
  playButton.position(width/2, height/2 + 60)
  playButton.mousePressed(userInputs);
  
  target = createVector(width / 2, 80);
  
  rocketImage = loadImage('Rocket2.png');
  moonImage = loadImage('Moon.png');
  asteroidImage = loadImage('Asteroid Brown.png');
  starBackgroundImage = loadImage('StarBackground.png');
  
  asteroid1XPos = int(random(20, 750));
  asteroid1YPos = int(random(120, 500));
  asteroid2XPos = int(random(20, 750));
  asteroid2YPos = int(random(120, 500));
  asteroid3XPos = int(random(20, 750));
  asteroid3YPos = int(random(120, 500));
  asteroid4XPos = int(random(20, 750));
  asteroid4YPos = int(random(120, 500));
}

function draw() 
{
  image(starBackgroundImage, 0, 0);
  fill(color('white'));
  textSize(25);
  
  if(play == false)
  {
  text("Enter Population", width/2 - 78, height/2 - 120)
  text("Enter Lifespan (Seconds)", width/2 - 70, height/2 - 30)
  }
  
  if(play == true)
  {
  image(moonImage, target.x - 20, target.y - 60, 100 , 100);
  population.run();
  
  // Text on screen
  text("Lifespan : "+ count + " / " + lifespan, 5, 25);
  text("Population : "+ popValue, 5, 60);
  text("Evolution : "+ evolution, 5, 95);

  count++;
  if (count == lifespan) 
  {
    population.evaluate();
    population.selection();

    evolution++;
    count = 0;
  }
  
  // Render asteroids
  image(asteroidImage ,asteroid1XPos, asteroid1YPos, asteroidWidth, asteroidHeight);
  image(asteroidImage ,asteroid2XPos, asteroid2YPos, asteroidWidth, asteroidHeight);
  image(asteroidImage ,asteroid3XPos, asteroid3YPos, asteroidWidth, asteroidHeight);
  image(asteroidImage ,asteroid4XPos, asteroid4YPos, asteroidWidth, asteroidHeight);
  }
}

function userInputs()
{
  lifespan = userInputLifespan.value() * 100;
  popValue = userInputPopulation.value();
  play = true;
  userInputPopulation.hide();
  userInputLifespan.hide();
  playButton.hide();
  population = new Population();
}