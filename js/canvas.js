var canvas;

//Score
var TotalScore;
//Level
var levelActive = 0; //Gebruikt voor de puntentelling
var currentLV = 1;

//Moeheid
var moeheid = 0;
var fade = 0;
var oog = 0;
var wazig = 0;
var fader = 0;

var topoogx = 0;
var bodoogx = canvas.height;

function loop()
{
 	countScore();
	moeheidFX();
}
function countScore()
{
 	while (levelActive = 1)
	{
 		TotalScore +=25;
 	}
}
 
function newLevel2() //Level 2
{
 	if TotaalScore => /*vereiste score per level*/
	{
		levelActive = 0;
		//Laad het volgende level
		currentLV = 2;
 		levelActive = 1;
 	}
}

function newLevel3() //Level 3
{
 	if TotaalScore => /*vereiste score per level*/
	{
		levelActive = 0;
		//Laad het volgende level
		currentLV = 3
 		levelActive = 1;
 	}
}

function newLevel4() //Level 4
{
 	if TotaalScore => /*vereiste score per level*/
	{
		levelActive = 0;
		//Laad het volgende level
		currentLV = 4
		levelActive = 1;
 	}
}


//If moeheid is boven bepaald iets, dan run de bijbehorende functie (Hieronder) en set EffectActief 1
//If moeheid is onder een bepaalde waarde en effectActief is 1, dan run resetEffect (ook hieronder) 

function moeheidFX	//Alleen in lv 2, 3 en 4. Lv 2 heeft ogen dichtvallen en wazig, etc. , lv 3 heeft vertraagde reacties. In lv 4 is alles, maar minder extreem.   
{	//while levelactive?
	while (moeheid > 45 & LevelActive > 1)
	{
		beeldWazig()
	}
	while (moeheid > 65 & LevelActive > 1)
	{
		oogSluit()
		topoogx +=10;
		botoogx -=10;
		
	}
	while (moeheid > 75 & LevelActive > 1)
	{
		fader += 0.0005;
		visionFade()
	}
	
	if (moeheid < 45 && wazig = 1)
	{
		resetWazig()
	}
	if (moeheid < 65 && oog = 1)
	{
		resetSluit()
	}
	if (moeheid < 75 && fade = 1)
	{
		resetFade()
	}
}

function visionFade() //Dit gebeurt als je moeheid boven een bepaald niveau komt
{
	fade = 1;
	canvas.fillStyle = "rgba(0,0,0,"+fader+")";

	if (ActiveLevel < 4)
	{
		//darkener.fadeTo( 5, 0.15)	JQUERY MIET GEBRUIKEN MET CANVAS
	}
	else if (ActiveLevel = 4)
	{
		//darkener.fadeTo( 15, 0.35) JQUERY NIET GEBRUIKEN MET CANVAS
	}	//Aan de hand van voorbeeld met drawRect
}

function resetFade() 
{
	fade = 0;
	fader = 0;
	//darkener.fadeTo( 1, 1) //Sneller: langzaam in slaap vallen en dan wakkerschrikken		DIT IS JQUERY, HERDOEN IN JAVASCRIPT
}

function oogSluit()
{
	oog = 1;
	//2 rects die op de top en bodem beginnen en groeien naar het midden
	
	if (LevelActive < 4)
	{
		while (topoogx < 270)
		{
			canvas.fillRect(0,0,topoogx,game.width); //Bovenste oog
			canvas.fillRect(0,0,botoogx,game.width); //Onderste oog
		}
		//lv 2 en 3: ogen bedekken 95% van het scherm.
		//$(#oltop).animate({height: '-=20px'},5000);		//Ooglid top, hoogte -20px over 5 sec	JQUERY
		//$(#olbot).animate({height: '+=20px'},5000);		//Ooglid bodem, hoogte +20px over 5 sec JQUERY
		
	}

	if (LevelActive = 4)
	{
		while (topoogx < 150)
		{
			canvas.fillRect(0,0,topoogx,game.width); //Bovenste oog
			canvas.fillRect(0,0,botoogx,game.width); //Onderste oog
		}
	}

	
	canvas.fillRect(0,0,topoogx,game.width); //Bovenste oog
	canvas.fillRect(0,0,botoogx,game.width); //Onderste oog
}

function resetSluit()
{
	oog = 0;
	topoogx = 0;
	bodoogx = game.height;
	//2 rects trekken zich terug
}

function beeldWazig()
{
	wazig = 1;
	//2Beeld wordt wazig
}

function resetWazig()
{
	wazig = 0;
	//2Beeld wordt helder
}