const timer = document.getElementById('stopwatch');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

// let status = stopped;
// let interval = null;

// function startstop() {
//  	if (status === "stopped") {
//  		window.setInterval(startTimer,10);
//  		status = "started";
//  		document.getElementById("start").innerHTML = "Stop";
//  	}
//  	else{
//  		window.clearInterval(interval);
//  		status = "stoppped";
//  		document.getElementById("start").innerHTML = "Start";
//  	}
//  }

function startTimer() {
	if (stoptime == true) {
		stoptime = false;
		timerCycle();
	}
	// else{
	// 	stoptime = true;
 	// 	timerCycle();
	// }
}



function stopTimer() {
	if (stoptime == false){
		stoptime = true;
		timerCycle();
	}
	// else{
	// 	stoptime = false;
	// 	timerCycle();
	// }
}

function timerCycle(){
	if (stoptime == false) {
		sec = parseInt(sec);
		min = parseInt(min);
		hr = parseInt(hr);

		sec = sec + 1;

		if (sec == 60) {
			min = min + 1;
			sec = 0;
		}

		if (min == 60) {
			hr = hr + 1;
			min = 0;
			sec = 0;
		}

		if (sec < 10) {
			sec = "0" + sec;
		}
		if (min < 10) {
			min = "0" + min;
		}
		if (hr < 10) {
			hr = "0" + hr;
		}

		timer.innerHTML = hr + ":" + min + ':' + sec;
		setTimeout('timerCycle()', 1000);

	}
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
  laps.innerHTML = document.getElementById("hd").innerHTML + "<br>" + "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}

function lap() {
	lapresult =  hr + ":" + min + ':' + sec;
	document.getElementById('laps').innerHTML = document.getElementById('laps').innerHTML  + "<p>" + lapresult + '</p>';
}
