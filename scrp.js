/**
 * Variables
 */ 
var color1 = document.getElementById("leftColor");
var color2 = document.getElementById("rightColor");
var body = document.querySelector("body");
var text = document.querySelector("h3");
var button = document.querySelector("button");

/** 
 * Logic
 */
changeColor();

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

button.addEventListener("click", swapColors);

/** 
 * Functions
 */
// Changes color of the background
function changeColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	text.textContent = body.style.background + ";";
	setVisibleTextColor();
}

// Swaps colors places
function swapColors(){
	var tmp = color1.value;
	color1.value = color2.value;
	color2.value = tmp;
	changeColor();
}

// Sets text color visible
function setVisibleTextColor(){
	if(dark()){
		body.style.color = "white";
	} else {
		body.style.color = "black";
	}
}

// Decides if colors are too dark or not
function dark(){
	var red1 = "0x" + color1.value.substring(1, 3), blue1 = "0x" + color1.value.substring(5), green1 = "0x" + color1.value.substring(3,5);
	var red2 = "0x" + color2.value.substring(1, 3), blue2 = "0x" + color2.value.substring(5), green2 = "0x" + color2.value.substring(3,5);
	red1 = parseInt(red1);
	blue1 = parseInt(blue1);
	green1 = parseInt(green1);
	green2 = parseInt(green2);
	blue2 = parseInt(blue2);
	red2 = parseInt(red2);
	if ((red1*0.299 + green1*0.587 + blue1*0.114) > 150 || (red2*0.299 + green2*0.587 + blue2*0.114) > 150) {return false;}
	else {return true;}
}
