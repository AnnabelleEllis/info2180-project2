/*var bimg = document.createElement("img");
	bimg.scr = "dog.jpg";
	document.body.appendChild(bimg);


var pic.onload = function changeBackground(){
	/*var bimg = document.createElement("img");
	bimg.scr = "dog.jpg";
	document.body.appendChild(bimg);
	/*document.getElementById("puzzlearea").appendChild(bimg);
}*/


/*var pic.onload = function changeBackground(){
	//var puzzle1 = document.getElementById("puzzlearea");
	//puzzle1.classList.add("puzzlepiece");
	var puzzle1 = document.querySelector('#puzzlearea').children;
	for(var i = 0; i < puzzle1.length; i++){
		console.log("")
	  puzzle1[i].classList.add("puzzlepiece");
	}
}*/

//var puzzle1 = document.querySelector('#overall').children;
//var puzzle2 = puzzle1.children;
	//for(var i = 0; i < puzzle.length; i++){
		//console.log("The div elements " ,puzzle1[i])
	  //puzzle1[i].classList.add("puzzlepiece");
	//}

 //console.log(document.getElementById('puzzlearea'));
 /*var puzzle1 = document.querySelector('#overall').children;
	var puzzle2 = puzzle1.querySelector('#puzzlearea').children;
	for(var i = 0; i < puzzle.length; i++){
		console.log("The div elements " ,puzzle1[i])
	  puzzle1[i].classList.add("puzzlepiece");*/

function changeBackground(puzzle1){
 	for(var i = 0; i < puzzle1.length; i++){
		//console.log("The div elements ",puzzle1[i]);
	  	puzzle1[i].classList.add("puzzlepiece");
	  	puzzle1[i].style.left = (i % 4 * 100) + "px";
	  	//puzzle1[i].style.float = 'left';
	  	puzzle1[i].style.top = (parseInt(i / 4) * 100) + "px";

	  	puzzle1[i].style.backgroundPosition = "-" + puzzle1[i].style.left + " " + "-" + puzzle1[i].style.top;
	}  
 }

/* function changeBk(puzzle1){
 	/*for(var i = 0; i < puzzle1.length - 1; i++){
		//puzzle1[i].style.backgroundAttachment = "relative";
		puzzle1[i].style.float = 'left';
		
		//var  val = ["top left", "top center", "top right","center left", "center center", "center right", "bottom left","bottom center","bottom right"];
		
		/*for(var p = 0; p < val.length - 1; p++){
			puzzle1[i].style.backgroundPosition = val[p];
		}
	}

	puzzle1[0].style.backgroundPosition = "top left";
	puzzle1[1].style.backgroundPosition = "top center";
	puzzle1[2].style.backgroundPosition = "top right";
	puzzle1[3].style.backgroundPosition = "center left";
	puzzle1[4].style.backgroundPosition = "center center";
	puzzle1[5].style.backgroundPosition = "center right";
	puzzle1[6].style.backgroundPosition = "bottom left";
	puzzle1[7].style.backgroundPosition = "bottom center";
	puzzle1[8].style.backgroundPosition = "bottom right";
	//puzzle1[9].style.backgroundPosition = "top center";
	//puzzle1[10].style.backgroundPosition = "top center";
	//puzzle1[11].style.backgroundPosition = "top center";
	//puzzle1[12].style.backgroundPosition = "top center";
	//puzzle1[13].style.backgroundPosition = "top center";
	//puzzle1[14].style.backgroundPosition = "top center";
	//puzzle1[14].style.backgroundPosition = "top center";


 }*/


function addDiv(newDiv){
	//var textHere = document.createTextNode("Hi Annabelle");
	//newDiv.appendChild(textHere);
	//newDiv.style.border2px solid black;
	newDiv.style.background = "none";
	//newDiv.style.display = "block";
	//newDiv.style.visibility = "hidden";
	//newDiv.style.backgroundPosition = "-300px -300px";
	//newDiv.style.left = "300px";
	//newDiv.style.top = "300px";

	//var addHere = document.getElementsByClassName('puzzlepiece');
	var addHere = document.getElementById('puzzlearea');
	// console.log(addHere);
	addHere.appendChild(newDiv);
	//addHere.classList.remove('puzzlepiece');
	//var lastItem = document.querySelector('.puzzlepiece:last-child');
	//Note: This is an HTML collection
	//lastItem.appendChild(newDiv);

	// var addHere = document.getElementById('puzzlearea');
	// //console.log(addHere);
	// addHere.appendChild(newDiv);
	// addHere.removeClassName("puzzlepiece");
	//newDiv.removeClassName("puzzlepiece");

	//newDiv.style.backgroundImage = "none";
	newDiv.style.border = " 2px solid black";
}

function shufflePuzzle(puzzle1){
	// for (int i = 0;i < puzzle1.length;i++){

	// }
// 	for (var i = ul.children.length; i >= 0; i--) {
//     ul.appendChild(ul.children[Math.random() * i | 0]);
// }
	var newPos, temp;
	var puzzle = document.getElementById("puzzlearea")
	for (var i = puzzle.length - 1; i > 0; i--) {
		newPos = Math.floor(Math.random() * (i +1));
		temp = puzzle[i];
		puzzle[i] = puzzle[newPos];
		puzzle[newPos] = temp;
		puzzle1 = puzzle[newPos].children;
		//puzzle.appendChild(puzzle1[newPos]);
    	//puzzle.appendChild(puzzle1[Math.random() * i | 0]);
	}
	console.log(puzzle);
	console.log(puzzle1);
	return puzzle1;
}

window.onload = function(){
	var puzzle1 = document.getElementById("puzzlearea").children;
	var newDiv = document.createElement('div');
	var actionButton = document.getElementById("shufflebutton");
	addDiv(newDiv);
	changeBackground(puzzle1);
	actionButton.addEventListener("click", shufflePuzzle(puzzle1));
}

 

