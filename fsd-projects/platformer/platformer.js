
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(84, 196, 177)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 900, 20, 290);
    createPlatform(600, 500, 50, 250);
    createPlatform(430, 650, 50, 50);
    createPlatform(550, 560, 50, 50);
    createPlatform(400, 570, 35, 250);
    createPlatform(250, 700, 50, 50, "red");
    createPlatform(750, 640, 85, 20);
    createPlatform(1050, 420, 65, 20);
    createPlatform(900, 550, 100, 25);
    createPlatform(1100, 220, 100, 25);
    createPlatform(1250, 350, 100, 40, "red");
    createPlatform(950, 200, 100, 20);
    createPlatform(1150, 400, 100, 20);
    createPlatform(700, 250, 100, 20);
    createPlatform(550, 180, 100, 20);
    createPlatform(550, 200, 20, 100);
    createPlatform(470, 300, 100, 20);



   
   // TODO 3 - Create Collectables
   createCollectable("diamond", 500, 250, 0.5, 0.7);
   createCollectable("steve", 1350, 50);
   createCollectable("grace", 950, 100)
  

    createCannon("top", 200, 500, 20, 10, 100, 400, 2);
    createCannon("top", 800, 1000, 20, 10, 100, 250, 2);
    createCannon("bottom", 900, 1000, 20, 10, 100, 500, 2)
    createCannon("right", 600, 1000, 20, 10, 100, 250, 2)

 
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
})
