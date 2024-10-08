$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
  canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;";

  


  function setup() {
    if (firstTimeSetup) {
      deathImage = document.getElementById("ULTRAKILL");
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);


    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(250, 650, 100, 20);
    createPlatform(500, 700, 100, 20);
    createPlatform(350, 600, 100, 20);
    createPlatform(200, 500, 100, 20);
    createPlatform(350, 400, 100, 20);
    createPlatform(500, 300, 100, 20);
    createPlatform(700, 500, 50, 20);
    createPlatform(800, 400, 100, 20);
    createPlatform(1050, 600, 100, 20);
    createPlatform(1200, 500, 100, 20);
    createPlatform(1300, 368, 100, 20);

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("steve", 500, 200, 2);
    createCollectable("diamond", 450, 700, 0);
    createCollectable("max", 800, 300);
    createCollectable("kennedi", 1200, 550);
    createCollectable("database", 100, 400, 0);
    createCollectable("grace", 1300, 200, 0);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("bottom", 600, 1000);
    createCannon("left", 200, 1500);
    createCannon("left", 500, 1500);
    createCannon("top", 550, 1500);
    createCannon("top", 1100, 1000);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }
  

  registerSetup(setup);
});
