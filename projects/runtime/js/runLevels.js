var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBalde(x, y){
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap("img/sawblade.png")
      obstacleImage.x = -25
      obstacleImage.y = -25
      sawBladeHitZone.addChild(obstacleImage)
    }

    createSawBalde(1000,300)
    createSawBalde(1500,300)
    createSawBalde(1600,300)

  
    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy",25);
      var redSquare  = draw.rect(50,50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y
      game.addGameItem(enemy)
      enemy.velocityX = -1
      enemy.rotationalVelocity = -100
  
      enemy.onPlayerCollision = function(){game.changeIntegrity(-10)};
      enemy.onProjectileCollision = function(){
        game.increaseScore(100);
        enemy.fadeOut()
  
      }
    }

    createEnemy(2500,groundY -50)
    createEnemy(3500,groundY -50)
    createEnemy(2000,groundY -50)

 
    

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
