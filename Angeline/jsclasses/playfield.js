"use strict"; // new JS6 functionality makes this needed! for classes
/*
 *  File: playfield.js
 *  Version: 1.0
 *  Date created: 19-11-2015
 *  Author: W. van Vliet
 */
/*
 *  Status of the game defined as constants. Less likely to make typing errors
 *  with constants. You get real error in browser if you type this wrongly. This
 *  will not happen if you use string values.
 */
var STARTED = 0;
var STOPPED = 1;

class PlayField{
  constructor(size){
    this.size    = size;        // Size of the playfield in pixels
    this.players = new Array(); // Two players of the game
    this.status  = STOPPED;     // Current status of the game
  
  }
  /*
   *  Start the game and position the ball in the middle of the field
   */
  startGame(){
    if(this.status == STOPPED ){
    this.players[0] = new Player(10); 
      this.status = STARTED;
    }
  }
  /*
   *  Stop the game. Nothing more than this needed ;-)
   */
  stopGame(){
    if(this.status == STARTED){
      this.status = STOPPED;
    }
  }
  /*
   *  movePlayer gets the pressed key from the main.js and passes it to the
   *  correct player.
   *  keyCode: the pressed key of the document as char value
   */
  movePlayer(keyCode){
    switch(keyCode){
      case 37: // LEft key right player
        this.players[0].move(-1);
        break;
      case 39: // Rechts key right player
        this.players[0].move(1);
        break;
    }
  }
  

  /*
   *  Every class draws itself on the canvas. This is the default draw method of
   *  the class. I wish I could define an Interface for this ...
   *  canvas: The canvas to draw on
   */
  draw(canvas){
    // draw background
    this.buildBackgroundImage(canvas);
    // draw the players
    this.players[0].draw(canvas);
  }

  /*
   *  Helper method to create the iconic background image of pong
   *  canvas: The canvas to draw on
   */
  buildBackgroundImage(canvas){
       canvas.clearRect(0,0,800, 600);
  }
}
