var rate21 = 50;
var duoDiscusRate = 75;
var rate23 = 45;
var rate24 = 45;
/*The rates for the sailplanes are ^ */

var insWSCAC = 60;
var insYouAC = 70;
var insGrnd = 60;
/*The rates for instruction, in format ins<Aircraft><Place> ex. ins<WSC aircraft><In aircraft> = insWSCAC */

var tow100 = 1.4;
/*The rate per hundred feet of tow.*/

function hr2min(hourTime) {
	return hourTime*60;
}
//Turns hours into minutes.

$(document).ready( function(){
	document.getElementById("calculButton").onclick = function() {calculatePrice();};
});
function calculatePrice() {
	
}