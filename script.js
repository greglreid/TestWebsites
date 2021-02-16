// Event Function
var sequence = 0;

function button2() {
	if (sequence == 0) {
		sequence = 1;
	} else {
		document.getElementById("wrong").hidden = false;
		sequence = 0;
		setTimeout(resetMsg, 1000);
	}
}

function button4() {
	if (sequence == 1) {
		sequence = 2;
	} else {
		document.getElementById("wrong").hidden = false;
		sequence = 0;
		setTimeout(resetMsg, 1000);
	}
}

function button1() {
	if (sequence == 2) {
		sequence = 3;
	} else {
		document.getElementById("wrong").hidden = false;
		sequence = 0;
		setTimeout(resetMsg, 1000);

	}
}

function button3() {
	if (sequence == 3) {
		document.getElementById("wrong").hidden = true;
		document.getElementById("solved").hidden = false;
	} else {
		document.getElementById("wrong").hidden = false;
		sequence = 0;
		setTimeout(resetMsg, 1000);
	}
}

function resetMsg(){
	document.getElementById("wrong").hidden = true;	
}
