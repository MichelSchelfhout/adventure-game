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


var song1 = new Audio('./Theme.mp3');
song1.play();

knop.onclick = function(){

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
	var song2 =	new Audio ('./Story.mp3').play();
	

	knop.onclick = level3;

		

}

function level3(){


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

			document.body.style.backgroundImage = 'url("./grfx/img/background5.jpg")';
			knop.innerHTML = 'Accept the quest the creature gave you';
			knop.style.marginLeft = '-500px';
			knop.style.height = 'auto';
			

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

		    knop.onclick = level7;



}

function level7(){



}



function keyclick(){

		    knop.innerHTML = 'Open lock?';

}

function warning(){

		    alert("It appears you need a key to open the lock");
}





   




    

