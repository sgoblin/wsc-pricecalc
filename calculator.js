var rate21 = 50;
var rateDuo = 75;
var rate23 = 45;
var rate24 = 45;
/*The rates for the sailplanes are ^ */

var insWSCAC = 60;
var insYouAC = 70;
var insGrnd = 60;
/*The rates for instruction, in format ins<Aircraft><Place> ex. ins<WSC aircraft><In aircraft> = insWSCAC */

var tow = 1.4/100;
/*The rate per foot of tow.*/

function hr2min(hourTime) {
	return hourTime*60;
}
//Turns hours into minutes.

function min2hr(minTime) {
	return minTime/60;
}

function divide(firstNum, secondNum){
	return firstNum/secondNum;
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("calculButton").addEventListener("click", function(){calculatePrice();});
});
function calculatePrice() {
	var airplanePrice;
	var instPrice;
	
	switch (document.getElementById("airplaneSel").value) {
		case "ASK-21":
			airplanePrice = rate21;
			break;
		case "DUO-X":
			airplanePrice = rateDuo;
			break;
		case "ASK-23":
			airplanePrice = rate23;
			break;
		case "ASW-24":
			airplanePrice = rate24;
			break;
		default:
			airplanePrice = 0;
			break;
	}
	// airplanePrice ^
	
	if (document.getElementById("instSel").value == "yes" && document.getElementById("airplaneSel").value == "Yours"){
		instPrice = 70;
	} else if (document.getElementById("airplaneSel").value == "ASK-23" || document.getElementById("airplaneSel").value == "ASW-24") {
		instPrice = 0;
	} else if (document.getElementById("instSel").value == "yes"){
		instPrice = 60;
	} else {
		instPrice = 0;
	}
	// instPrice ^
	
	var towPrice = (parseInt(document.getElementById("towHeight").value)*tow)/min2hr(parseInt(document.getElementById("eta").value));
	// towPrice ^
	
	var finalPrice = Math.round((airplanePrice+instPrice+towPrice)*100)/100;
	//window.alert("$"+finalPrice+" per hour");
	//alert($("#towHeight").value);
	document.getElementById("resultMin").value = "$"+(Math.round((finalPrice/60)*100)/100);
	document.getElementById("resultHour").value = "$"+finalPrice;
}