function setup() {

//////////////////////////////////////////////////////
// NAME SUFFLE
/////////////////////////////////////////////////////

//SELECT HTML LETTERS AS A (P5) ARRAY
var name = selectAll('h1');
console.log(name);

//RANDOMLY SHUFFLE LETTERS IN THE ARRAY 
//(FISHER-YATES METHOD. THANKS TO www.kirupa.com/html5/shuffling_array_js.htm)
	Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
         
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};

name.shuffle();

//CHANGE CSS VISIBILITY PROPERTY BY 
//LOOPING THRU RANDOMIZED ARRAY (WITH TIMEOUT)

var m = 0;
function nameLoop() {
	setTimeout(function() {
		name[m].style('visibility','visible');
		console.log(name[m]);
	m++;
	console.log (m);
	if (m < name.length) {
		nameLoop();}
	}, 250);
}
nameLoop();

//////////////////////////////////////////////////////
// POP UP BOXES
/////////////////////////////////////////////////////
var i;

// CREATE ARRAY OF ITEMS WITH 'POPUP' CLASS
var popUp = selectAll('.popUp');

// CREATE ARRAY OF HTML DOT IDS
// SO THAT MOUSING OVER A SPECIFIC DOT WILL 
// TRIGGER A SPECIFIC EVENT
var showWork = [];
showWork[0] = select('#audio');
showWork[1] = select('#2dDesign');
showWork[2] = select('#video');
showWork[3]= select('#fx');

var openPage = [];
openPage[0] = "http://git-ebetts.github.io/Agile_2";
openPage[1] = "http://git-ebetts.github.io/Agile_3";
openPage[2] = ("http://git-ebetts.github.io/Agile_4");
openPage[3]= select('#fx');

function setMouseEvents(thePopup, theValue){
	//ASSIGN MOUSE EVENTS TO HTML DOTS

	showWork[theValue].mouseOver(function(){
		thePopup.style('visibility', 'visible');
		popUp[theValue].style('visibility', 'visible');
	});

		showWork[theValue].mouseOut(function(){
		thePopup.style('visibility', 'hidden');
		popUp[theValue].style('visibility', 'hidden');
	});

		showWork[theValue].mouseClicked(function(){
		window.open(openPage[theValue]);
	});

	}

// ASSIGN MOUSE EVENTS
for (i = 0; i < popUp.length; i++) {

	setMouseEvents(popUp[i],i);
}
}

  