/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  let gameActive = true
  let count = 0
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  const KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40, 
    "W": 87,
    "A": 65,
    "S": 83,
    "D": 68,
  }

  const border = {
    WIDTH: $("#board").width(),
    HEIGHT: $("#board").height(),
  }
 
  const movementSpeed = 10
  
  // Game Item Objects
  let walker = {
    WIDTH: $("#walker").width(),
    HEIGHT: $("#walker").height(),
    X: border.WIDTH - $("#walker").width(),
    Y: 0,
    XSpeed: 0,
    YSpeed: 0,
  }

  let walker2 = {
    WIDTH: $("#walker2").width(),
    HEIGHT: $("#walker2").height(),
    X: 0,
    Y: 0,
    XSpeed: 0,
    YSpeed: 0,
  }

  


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame(){

    //Player 1
    repositionGameItem(walker);
    redrawGameItem("#walker", walker);
    wallCollision(walker);

    //Player2 
    repositionGameItem(walker2);
    redrawGameItem("#walker2", walker2);
    wallCollision(walker2); 
    
    if (playerCollison("walker", "walker2")){
      walker.X = border.WIDTH - $("#walker").width();
      walker.Y = 0;
      walker2.X = 0
      walker2.Y = 0
      count += 1
      if(count % 2 === 0){
      $('body').css('backgroundColor', 'red')
      }
      else{
        $('body').css('backgroundColor', 'blue')
      }
      
    }
    

  }
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

    //player1
    if (event.which === KEY.LEFT){
      walker.XSpeed = -movementSpeed;
    }
    if (event.which === KEY.RIGHT){
      walker.XSpeed = movementSpeed;
    }

    if (event.which === KEY.UP){
      walker.YSpeed = -movementSpeed;
    }
    if (event.which === KEY.DOWN){
      walker.YSpeed = movementSpeed;
    }

    //Player2
    if (event.which === KEY.A){
      walker2.XSpeed = -movementSpeed;
    }
    if (event.which === KEY.D){
      walker2.XSpeed = movementSpeed;
    }

    if (event.which === KEY.W){
      walker2.YSpeed = -movementSpeed;
    }
    if (event.which === KEY.S){
      walker2.YSpeed = movementSpeed;
    }
  }

  function handleKeyUp(event) {
    //Player1
    if (event.which === KEY.LEFT){
      walker.XSpeed = 0;
    }
    if (event.which === KEY.RIGHT){
      walker.XSpeed = 0;
    }

    if (event.which === KEY.UP){
      walker.YSpeed = 0;
    }
    if (event.which === KEY.DOWN){
      walker.YSpeed = 0;
    }

    //Player2
    if (event.which === KEY.A){
      walker2.XSpeed = 0;
    }
    if (event.which === KEY.D){
      walker2.XSpeed = 0;
    }

    if (event.which === KEY.W){
      walker2.YSpeed = 0;
    }
    if (event.which === KEY.S){
      walker2.YSpeed = 0;
    }
  }

  //////////////////////////////////////////////////////////////////////////////// 
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  //player1 and player2 are the repective HTML element
  //Example playerCollision("walker", "walker2")
  function playerCollison(player1, player2){
    const player1Hitbox = document.getElementById(player1).getBoundingClientRect()
    const player2Hitbox = document.getElementById(player2).getBoundingClientRect()
    return !(
    ((player1Hitbox.top + player1Hitbox.height) < (player2Hitbox.top)) ||
    (player1Hitbox.top > (player2Hitbox.top + player2Hitbox.height)) ||
    ((player1Hitbox.left + player1Hitbox.width) < player2Hitbox.left) ||
    (player1Hitbox.left > (player2Hitbox.left + player2Hitbox.width))
    )
  }

  function repositionGameItem(player){
    player.X += player.XSpeed;
    player.Y += player.YSpeed;
  }

  function redrawGameItem(ID, player){
    $(ID).css("left", player.X);
    $(ID).css("top", player.Y); 
  }

  function wallCollision(player){

    if (player.X >= (border.WIDTH - player.WIDTH)){
      player.X -= player.XSpeed
    }
    if (player.Y >= (border.HEIGHT - player.HEIGHT)){
      player.Y -= player.YSpeed
    }
    if (player.X < 0){
      player.X -= player.XSpeed
    }
    if (player.Y < 0){
      player.Y -= player.YSpeed
    }
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
