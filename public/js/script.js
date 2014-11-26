var socket = io.connect('http://localhost:8080');



// Just landed a trick. Show me.
$('#viewTrick').on('click', function(){
	//console.log('show trick');
	socket.emit('trick data');
})

var line;
var $x_Accel = [],
	$z_Accel = [],
	$yaw = [],
	$pitch = [],
	$roll = [],
	$state = [];

var z_Accel;
var state;

// Recieve trick
socket.on('trickData', function(trickData){
	//console.log(trickData);
	parseData(trickData);
	//console.log($state);
	switchState()
	//onGround();
	//console.log('---------------------------------------------------------------------------');
	// reset all values to call next trick
	resetValues();
	//console.log('reset y position: ' + yPosition);
	console.log('airtime: ' + airtime);
	
})

// Not enought data
socket.on('not enought', function(){
	console.log('Not enought data recieved');
})

var airtime = 0;
function parseData( data ) {

	// Loop through all the trick data
	for (var i = 0; i < data.length; i++) {
		line = data[i];
		//console.log(line);

		$x_Accel.push(line[0]);
		$z_Accel.push(line[1]);
		$yaw.push(line[2]);
		$pitch.push(line[3]);
		$roll.push(line[4]);


		// Check if its jumping
		if (line[1] == 0){
			state = 'ground';
			$state.push(state);
			
		} else {
			state = 'air';
			$state.push(state);
			airtime += 1;
		}
	}

}


var thisState;
var k;
function switchState(){

	for( k = 0; k < $state.length; k++) {
		thisState = $state[k];

		// Check what state function to launch
		if (thisState == 'ground'){
			//console.log('call ground');
			onGround();
		} else if (thisState == 'air'){
			//console.log('call air');
			onAir();
		}
	}
}

var totalSpeed = 2;
var initialYaw, total_angle_diff;
var pi = 3.14;
var xSpeed, ySpeed;
var xPosition, xInitialPosition = 0;
var yPosition, yInitialPosition = 0;
var time = 0.02;

function onGround(){
	//initialYaw = $yaw[0]*pi/180;
	initialYaw = $yaw[0];
	//console.log('initialYaw: ' + initialYaw);

	//for(var j = 0; j < $yaw.length; j++){
		//console.log('yaw: ' + $yaw[j]);
		if ($yaw[k] < 0 && initialYaw > 0) {
			total_angle_diff = $yaw[k] - initialYaw;
		} else if ($yaw[k] > 0 && initialYaw < 0 ){
			total_angle_diff = $yaw[k] + initialYaw;
		} else {
			total_angle_diff = $yaw[k] - initialYaw;
		}


		// transform it to radians
		total_angle_diff = total_angle_diff*pi/180;
		//console.log("total_angle_diff: " + total_angle_diff);

		// Calculate x speed
		xSpeed = totalSpeed*Math.sin(total_angle_diff);
		//console.log('xSpeed: ' + xSpeed);
		// Calculate x position
		xPosition = xInitialPosition + xSpeed*time;
		xInitialPosition = xPosition;
		//console.log('xposition: ' + xPosition);

		// Calculate y position
		ySpeed = totalSpeed*Math.cos(total_angle_diff);
		//console.log('ySpeed: ' + ySpeed);
		// Calculate yPosition
		yPosition = yInitialPosition + ySpeed*time;
		yInitialPosition = yPosition;
		//console.log('yPosition: ' + yPosition);
	//}
}


function onAir(){
	console.log('on air');
	// Keep x and y speed and positions constant
	xPosition = xInitialPosition + xSpeed*time;
	xInitialPosition = xPosition;
	//console.log('xposition on air: ' + xPosition);

	yPosition = yInitialPosition + ySpeed*time;
	yInitialPosition = yPosition;
	//console.log('yPosition on air: ' + yPosition);
}

function resetValues(){
	total_angle_diff = 0; xSpeed = 0; ySpeed = 0; xPosition = 0; xInitialPosition = 0;
	yPosition = 0; yInitialPosition = 0;

	$x_Accel = [],
	$z_Accel = [],
	$yaw = [],
	$pitch = [],
	$roll = [],
	$state = [];
}
