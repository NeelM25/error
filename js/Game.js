class Game{
    constructor(){

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

    start(){
        form = new Form();
        form.display();
        
        player = new Player();
        playerCount = player.getCount();

        player1 = createSprite(width/2-250, height-100);
        player1.addAnimation("player1Stand", stand1);
        player1.scale = 3.5;
        player2 = createSprite(width/2+250, height-100);
        player2.addAnimation("player2Stand", stand2);
        player2.scale = 3.5;
    }

    play(){
        form.hide();
        Player.getPlayersInfo();
        if(allPlayers !== undefined){
            image(bgImg, 0, -200, width, height+400);

            drawSprites();
        }
    }
}