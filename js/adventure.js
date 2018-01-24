var knop = document.getElementById('knop');
var body = document.getElementsByTagName('body');
var kop = document.getElementById('kop');
var knop2 = document.getElementById('knop2');
var knop3 = document.getElementById('knop3');
var key = document.getElementById('key');
var inventory = document.getElementById('inventory');
var tekstinv = document.getElementById('tekstinv');
var keyobject = document.getElementById('keyobject');
var wolf = document.getElementById('wolf');
var verhaal = document.getElementById('verhaal');
var zwaard = document.getElementById('sword');
var swordobject = document.getElementById('swordobject');
var sword2 = document.getElementById('sword2');
var swordeffect = document.getElementById('swordeffect');

var song1 = new Audio('./Theme.mp3');

song1.play();

knop.onclick = function(){

	verhaal.style.display = 'inline';
	tekstinv.style.display = 'inline';
	inventory.style.display = 'inline';
	document.body.style.backgroundImage = 'url("./grfx/img/background2.jpg")';
	knop.innerHTML = 'You continue to walk forward in to the mist';
	knop.style.width = '500px'; 
	knop.style.marginLeft = '-150px';
	knop.style.marginTop = '300px';
	kop.style.marginLeft = '0px';
	kop.style.marginTop = '-275px';
	kop.style.fontSize = '25px';
	song1.pause();
	var song2 =	new Audio ('./Story.mp3');
	song2.play();
	
	
	knop.onclick = level3;




	
	
		

}

function level3(){

			verhaal.innerHTML = 'You keep walking until the fog clears out. You notice the woods are getting thicker and there is a curve in the road. Moments later, while you catch your breath, you think you hear a voice calling out your name. Where is it coming from? What is going on?! Am I going insane?';
			document.body.style.backgroundImage = 'url("./grfx/img/background3.jpg")';
			knop.innerHTML = 'You give in to the voice calling your name and take a left';
			knop.style.marginLeft = '-500px';
			knop.style.height = 'auto';
			
			knop2.style.display = 'inline';
			knop2.style.width = '500px'; 
			knop2.style.marginLeft = '200px';
			knop2.style.marginTop = '300px';

			
			knop.onclick = level4;
			knop2.onclick = level6;
		
}

function level4(){

			verhaal.innerHTML = 'You are closely listening to what the voice is telling you. It’s telling you to keep following this path. Then you notice it’s saying something else:  Save me, save us, save yourself! You are somewhat freaking out. What the hell is going on?! Where am I, what is going on? You start picking up your pace, almost running, until you notice, ahead of you, there is a closed gate with a giant lock to keep it closed that way.';

			document.body.style.backgroundImage = 'url("./grfx/img/background4.jpg")';
			key.style.display = 'inline';
			knop.innerHTML = 'Attempt to open the lock';

			if (knop.innerHTML = 'Attempt to open the lock') {

				knop.onclick = warning;
			}


			key.onclick = function(){

			key.style.display = 'none';
			keyobject.style.display = 'inline';
			knop.innerHTML = 'Open lock?';
			knop.onclick = level5;
			}

			
			knop.style.marginLeft = '-125px';
			knop.style.marginTop = '350px';
			knop.style.height = 'auto';

			knop2.style.display = 'none';

			






	

}

function level5(){

			verhaal.innerHTML = 'You walk through the gate. Before you stands a magical creature that starts to speak to you. “Human, the tree behind me is the Tree of Eden. It is ill, due to the darkness that spreads across the country. It creeps up every minute. Defeat the dark dragon and the darkness shall perish. I will grant you your freedom if you complete this quest.”'
			document.body.style.backgroundImage = 'url("./grfx/img/background5.jpg")';
			knop.innerHTML = 'Accept the quest the creature gave you';
			knop.style.marginLeft = '-500px';
			knop.style.height = 'auto';
			knop.onclick = accept;

			
			knop3.onclick = death5;
			knop3.style.display = 'inline';
			knop3.style.width = '500px'; 
			knop3.style.marginLeft = '200px';
			knop3.style.marginTop = '350px';



}

function accept(){

	verhaal.innerHTML = 'Very well, I will set you on your way. Take this magical sword, it will imbue itself with a bright light when you are close to the dragon';
	knop.innerHTML = 'Teleport';
	knop.style.marginLeft = '300px';
	knop3.style.display = 'none';
	zwaard.style.display = 'inline';
	swordobject.style.display = 'none';

	

	zwaard.onclick = function(){

		zwaard.style.display = 'none';
		swordobject.style.display = 'inline' ;
		knop.innerHTML = 'Actually teleport';
		knop.onclick = level8;

		}

	if (knop.innerHTML = 'Teleport') {

		knop.onclick = warning2;
	}

}

function level6(){

		    document.body.style.backgroundImage = 'url("./grfx/img/background6.jpg")';
		    knop.innerHTML = 'Run at the wolf in full force, screaming in terror';
		    knop2.innerHTML = 'Take 2 steps back and run';
		    wolf.style.display = 'inline';

		    knop.onclick = plaatjewolf; 
		    knop.onclick = level7;
		    knop2.onclick = death;
}

function level7(){

			wolf.style.display = 'none';
			knop.innerHTML = 'The wolf disappeared, continue?'
			knop.onclick = level71;
}

function level71(){


		    verhaal.innerHTML = 'You get teleported somewhere in front of a big, forest looking island.';
			knop.innerHTML = 'Start walking towards the island';
		    document.body.style.backgroundImage = 'url("./grfx/img/background7.jpg")';

		    knop.style.marginLeft = '-200px';
		    knop2.style.display = 'none';
		    knop.onclick = level81;
}

function level8(){

		   verhaal.innerHTML = 'As you come closer to the island you notice a dark fog is setting in';
		   knop.innerHTML = 'Hurry and hide in the forest';
		   document.body.style.backgroundImage = 'url("./grfx/img/background7-2.jpg';

		   knop.onclick = level9;
}

function level81(){

		   verhaal.innerHTML = 'As you come closer to the island you notice a dark fog is setting in';
		   knop.innerHTML = 'Hurry and hide in the forest';
		   document.body.style.backgroundImage = 'url("./grfx/img/background7-2.jpg';

		   knop.onclick = level91;
}

function level9(){

		   verhaal.innerHTML = 'You got to the forest. But not even a minute after catching your breath. You can hear the roar of a mighty dragon. Looking up, you can see it flying over the island.'
		   knop.innerHTML = 'You continue deeper in to the forest'; 
		   document.body.style.backgroundImage = 'url("./grfx/img/background8.jpg")';

		   knop.onclick = level10;
}

function level91(){

		   verhaal.innerHTML = 'You got to the forest. But not even a minute after catching your breath. You can hear the roar of a mighty dragon. Looking up, you can see it flying over the island.'
		   knop.innerHTML = 'You continue deeper in to the forest'; 
		   document.body.style.backgroundImage = 'url("./grfx/img/background8.jpg")';

		   knop.onclick = level101;
}

function level101(){

		  document.body.style.backgroundImage = 'url("./grfx/img/background9.jpg")';
		  verhaal.innerHTML = 'You have a feeling you are about as far in the forest as you need to be. You look to your right and there you see a dark cave.'
		  knop.innerHTML = 'Get on your way, in the opposite direction of the cave';
		  knop.style.marginLeft = '-700px';
		  knop3.innerHTML = 'Continue in to the cave?';
		  knop3.style.display = 'inline';
		  knop3.style.marginLeft = '0px';

		  knop.onclick = level111;
		  knop3.onclick = death2;

}


function level10(){

		  document.body.style.backgroundImage = 'url("./grfx/img/background9.jpg")';
		  verhaal.innerHTML = 'You have a feeling you are about as far in the forest as you need to be. You notice your sword is emitting a blue bright light as the creature before said. You look to your right and there you see a dark cave.'
		  knop.innerHTML = 'Get on your way, in the opposite direction of the cave';
		  knop.style.marginLeft = '-700px';
		  knop3.innerHTML = 'Continue in to the cave?';
		  knop3.style.display = 'inline';
		  knop3.style.marginLeft = '0px';

		  knop.onclick = level11;
		  knop3.onclick = death2;

}

function level111(){

		knop3.style.display = 'none';
		document.body.style.backgroundImage = 'url("./grfx/img/background10.jpg")';
		verhaal.innerHTMl = 'You get to a overgrown and dark spot in the forest. You still have no idea what the f*ck is going on';
		knop.innerHTML = 'Continue to your likely death';
		knop.onclick = levelfinal2; 

}


function level11(){

		knop3.style.display = 'none';
		document.body.style.backgroundImage = 'url("./grfx/img/background10.jpg")';
		verhaal.innerHTMl = 'You get to a overgrown and dark spot in the forest. The sword is emitting an even more bright light and it seems like it is telling you to prepare yourself.';
		knop.innerHTML = 'Prepare your sword'
		knop.onclick = swordhand; 

}


function swordhand(){

		verhaal.innerHTML = 'With the sword, tightly gripped into your hands. You feel confident in your ability to overpower the darkness.'
	    sword2.style.display = 'inline';
	    knop.innerHTML = 'Continue forward, step by step';
	    knop.onclick = levelfinal;

}

function levelfinal2(){

		verhaal.innerHTML = 'Your surroundings change, trees are changing into rocks and the leaves on the floor make place for snow. You find yourself on top of a mountain with in front of you a mighty dragon.'
	    document.body.style.backgroundImage = 'url("./grfx/img/background11.jpg")';
	    knop.innerHTML = 'Start to cry';
	    knop.onclick = scene2; 
}

function levelfinal(){

		verhaal.innerHTML = 'Your surroundings change, trees are changing into rocks and the leaves on the floor make place for snow. You find yourself on top of a mountain with in front of you a mighty dragon.'
	    document.body.style.backgroundImage = 'url("./grfx/img/background11.jpg")';
	    knop.innerHTML = 'Brace';
	    knop.onclick = scene; 


}

function scene2(){

		verhaal.innerHTML = 'The dragon roars and jumps up. You can see it opening his jaws and you know, fire is coming your way.';
		knop.innerHTML = 'Ruuuun!';
		knop2.style.display = 'inline';
		knop2.innerHTML = 'Dig yourself in the snow around you';

		knop.onclick = death4; 
		knop2.onclick = death3;

}

function scene(){

		verhaal.innerHTML = 'The dragon roars and jumps up. You can see it opening his jaws and you know, fire is coming your way.';
		knop.innerHTML = 'Hold up your sword and slice in to the air';
		knop2.style.display = 'inline';
		knop2.innerHTML = 'Dig yourself in the snow around you';

		knop.onclick = victory; 
		knop2.onclick = death3;
}

function victory(){


		verhaal.innerHTML = 'Your sword lacerates through the air, launching a huge red projectile at the dragon, it destroys the fireball and the dragon with the biggest explosion you have ever seen.';
		knop2.style.display = 'none';
		knop.innerHTML = 'Continue'; 
		sword2.style.marginLeft = '280px';
		sword2.style.marginTop = '300px';
		swordeffect.style.display = 'inline';

		knop.onclick = victory2;
}

function victory2(){

		document.body.style.backgroundImage = 'url("./grfx/img/victory.jpg")';
		verhaal.innerHTML = 'Moments after you get teleported back to the tree and its creature. It congratulates you and gives you some words of wisdom. And as promised he is giving you your freedom';
		sword2.style.display = 'none';
		swordeffect.style.display = 'none';
		knop.innerHTML = 'Go home, you might be just in time for dinner.';
		knop.onclick = victoryscreen;

}

function victoryscreen(){


		document.body.style.backgroundImage = 'url("./grfx/img/victory2.jpg")';
		knop.innerHTML = 'The end.';
		knop.onclick = home;
}




function keyclick(){

		    knop.innerHTML = 'Open lock?';

}

function warning(){

		    alert("It appears you need a key to open the lock");
}

function warning2(){

		    alert("Did you take the sword?");
}

function plaatjewolf(){


	wolf.style.display = 'none';
	
}

function death(){
	
	
	document.body.style.backgroundColor = 'black'
	document.body.style.backgroundImage = 'url("./grfx/img/death.jpg")';
	knop.innerHTML = 'The wolf made a leap and killed you. Start again?';
	knop.style.marginLeft = '-700px';
	verhaal.style.display = 'none';
	wolf.style.display = 'none';
	knop2.style.display = 'none';
	tekstinv.style.display = 'none';
	inventory.style.display = 'none';
	knop.onclick = home;
}

function death2(){

	document.body.style.backgroundColor = 'black'
	document.body.style.backgroundImage = 'url("./grfx/img/death.jpg")';
	knop3.innerHTML = 'Idiot. Never go in to a dark cave.';
	knop3.style.marginLeft = '-700px';
	verhaal.style.display = 'none';
	knop.style.display = 'none';
	tekstinv.style.display = 'none';
	inventory.style.display = 'none';
	knop3.onclick = home;


}

function death3(){

	document.body.style.backgroundColor = 'black'
	document.body.style.backgroundImage = 'url("./grfx/img/death.jpg")';
	knop.innerHTML = 'Did you think you the snow would save you? Fool.';
	knop.style.marginLeft = '-700px';
	verhaal.style.display = 'none';
	tekstinv.style.display = 'none';
	inventory.style.display = 'none';
	knop.onclick = home;
	knop2.style.display = 'none'; 	
  
}

function death4(){

	document.body.style.backgroundColor = 'black'
	document.body.style.backgroundImage = 'url("./grfx/img/death.jpg")';
	knop.innerHTML = 'Did you think you could run away from a dragon? Fool.';
	knop2.style.display = 'none';
	knop.style.marginLeft = '-700px';
	verhaal.style.display = 'none';
	tekstinv.style.display = 'none';
	inventory.style.display = 'none';
	knop.onclick = home;
}

function death5(){

	document.body.style.backgroundColor = 'black'
	document.body.style.backgroundImage = 'url("./grfx/img/death.jpg")';
	knop.innerHTML = 'Never throw a stick at a magical creature.';
	knop2.style.display = 'none';
	knop.style.marginLeft = '-700px';
	knop3.style.display = 'none';
	verhaal.style.display = 'none';
	tekstinv.style.display = 'none';
	inventory.style.display = 'none';
	knop.onclick = home;
}

function home(){

	location = location;
}








   




    


