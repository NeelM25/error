var canvas, bgImgStart, bgImg;
var database;
var game, form, player;
var gameState, playerCount;
var attack1, attack2, die1, die2, jump1, jump2, kick1, kick2, run1, run2, stand1, stand2;
var allPlayers;
var player1, player2, players;

function preload(){
    bgImgStart = loadImage("assets/BgStart.jpg");
    bgImg = loadImage("assets/Bg.jpg");

    attack1 = loadAnimation("assets/Attack-1.1.jpg", "assets/Attack-1.2.jpg", "assets/Attack-1.3.jpg", "assets/Attack-1.4.jpg");
    die1 = loadAnimation("assets/Die-1.1.jpg", "assets/Die-1.2.jpg", "assets/Die-1.3.jpg", "assets/Die-1.4.jpg");
    jump1 = loadAnimation("assets/Jump-1.1.jpg", "assets/Jump-1.2.jpg", "assets/Jump-1.3.jpg", "assets/Jump-1.4.jpg", "assets/Jump-1.5.jpg")
    kick1 = loadAnimation("assets/Kick-1.1.jpg", "assets/Kick-1.2.jpg", "assets/Kick-1.3.jpg", "assets/Kick-1.4.jpg");
    run1 = loadAnimation("assets/Run-1.1.jpg", "assets/Run-1.2.jpg", "assets/Run-1.3.jpg", "assets/Run-1.4.jpg");
    stand1 = loadAnimation("assets/Stand-1.jpg");
    stand2 = loadAnimation("assets/Stand-2.jpg");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background(bgImgStart);

    if(playerCount === 2){
        game.update(1);
    }

    if(gameState === 1){
        game.play();
    }

   
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}