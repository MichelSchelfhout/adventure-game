var knop = document.getElementById('knop');
var body = document.getElementsByTagName('body');
var kop = document.getElementById('kop');
var knop2 = document.getElementById('knop2');
var knop3 = document.getElementById('knop3');
var key = document.getElementById('key');
var inventory = document.getElementById('inventory');
var tekstinv = document.getElementById('tekstinv');
var keyobject = document.getElementById('keyobject');
var wolf = document.getElementById('wolf')
var verhaal = document.getElementById('verhaal')
var zwaard = document.getElementById('sword')
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

			

			knop3.style.display = 'inline';
			knop3.style.width = '500px'; 
			knop3.style.marginLeft = '200px';
			knop3.style.marginTop = '350px';



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
	knop.innerHTML = 'The wolf disappeared, continue?'
}

function death(){
	
	
	document.body.style.backgroundColor = 'black'
	document.body.style.backgroundImage = 'url("./grfx/img/death.jpg")';
	knop.innerHTML = 'The wolf made a leap and killed you. Start again?';
	knop.style.marginLeft = '-700px';
	wolf.style.display = 'none';
	knop2.style.display = 'none';
	tekstinv.style.display = 'none';
	inventory.style.display = 'none';
	knop.onclick = again;

}

function again(){
	
	deathsong.pause();
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
	
	

	knop.onclick = level3;
}

function accept(){

	verhaal.innerHTML = 'Very well, I will set you on your way. Take this magical sword, it will imbue itself with a bright light when you are close to the dragon';
	knop.innerHTML = 'Teleport';
	knop.style.marginLeft = '300px';
	knop3.style.display = 'none';
	sword.style.display = 'inline';

	  sword.onclick = function(){

			sword.style.display = 'none';
			swordobject.style.display = 'inline';
			}

	knop.onclick = check;
}

function check(){

	if (swordobject.style.display = 'none') {

		knop.onclick = warning2;
	}
	
}






   




    


