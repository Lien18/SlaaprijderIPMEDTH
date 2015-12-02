"use strict";
function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var enemies = [ {"id":"enemy1","x":100,"y":-20,"w":40,"h":20},
                    {"id":"enemy2","x":225,"y":-20,"w":40,"h":20},
                    {"id":"enemy3","x":350,"y":-20,"w":40,"h":20},
                    {"id":"enemy4","x":100,"y":-70,"w":40,"h":20},
                    {"id":"enemy5","x":225,"y":-70,"w":40,"h":20},
                    {"id":"enemy6","x":350,"y":-70,"w":40,"h":20}
    ];
    function renderEnemies(){
        for(var i = 0; i < enemies.length; i++){
            ctx.fillStyle = "blue";
            ctx.fillRect(enemies[i].x, enemies[i].y+=3, enemies[i].w, enemies[i].h);
        }
    } 
    function Launcher(){
        this.y = 280, this.x = cW*.5-25, this.w = 50, this.h = 50, this.dir, this.bg="orange", this.missiles = [];
        this.render = function(){
            if(this.dir == 'left'){
                this.x-=5;
            } else if(this.dir == 'right'){
                this.x+=5;
            }
            
            if(enemies.length == 0){
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = '#FC0';
              
            }
        } 
    } 
    var launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies() 
    }
    var animateInterval = setInterval(animate, 30);
     
}
window.addEventListener('load', function(event) {
    initCanvas();
});