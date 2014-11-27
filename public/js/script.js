var socket = io.connect('http://localhost:8080');



// Just landed a trick. Show me.
$('#viewTrick').on('click', function(){
	//console.log('show trick');
	socket.emit('trick data');
})

// trick test
$('#trickTest').on('click', function(){

	show_visualizationPage();

	parseData(trickTest);
	//console.log(trickTest);
	switchState();
	resetValues();
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
	switchState();
	//onGround();
	//console.log('---------------------------------------------------------------------------');
	// reset all values to call next trick
	resetValues();
	//console.log('reset y position: ' + yPosition);
	//console.log('airtime: ' + airtime);
	
})

// Not enought data
socket.on('not enought', function(){
	console.log('Not enought data recieved');
})

var airtime = 0;
var total_time_on_air;
var airSpeed;
var gravity = 9.81;
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

	total_time_on_air = airtime*0.02; 
	console.log(total_time_on_air);
	airSpeed = 0.5*gravity*total_time_on_air;
	console.log(airSpeed);
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

var minus180 = false;
var plus180 = false;
function onGround(){
	console.log('on ground');

	// if there have been a 180
	if ( plus180 == true ) { $yaw[k] = $yaw[k] + 180; $roll[k] = $roll[k] *-1; $pitch[k] = $pitch[k] *-1;}
  	if ( minus180 == true ) { $yaw[k] = $yaw[k] - 180; $roll[k] = $roll[k] *-1; $pitch[k] = $pitch[k] *-1; }

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
		console.log('xposition: ' + xPosition);

		// Calculate y position
		ySpeed = totalSpeed*Math.cos(total_angle_diff);
		//console.log('ySpeed: ' + ySpeed);
		// Calculate yPosition
		yPosition = yInitialPosition + ySpeed*time;
		yInitialPosition = yPosition;
		console.log('yPosition: ' + yPosition);

		z_position = 0;
	//}
}

var air_interval = 0;
var elapsed_time_on_air;
var z_position = 0;
function onAir(){

	// Calculate z position
	console.log('on air');
	air_interval += 1;
	elapsed_time_on_air = air_interval*0.02;
	//console.log(elapsed_time_on_air);



	z_position = airSpeed*elapsed_time_on_air-0.5*gravity*elapsed_time_on_air*elapsed_time_on_air;
	//console.log('z position: ' + z_position);

	// detect first jump moment
	if (elapsed_time_on_air == 0.02) {
		//console.log('first jump');
		initialYawOnJumping = $yaw[k];
	}

	// detect landing moment
	if (elapsed_time_on_air == total_time_on_air) {
		yawOnLanding = $yaw[k];
		//console.log('landing');
		calculateLanding();
	}

	// Keep x and y speed and positions constant
	xPosition = xInitialPosition + xSpeed*time;
	xInitialPosition = xPosition;
	console.log('xposition on air: ' + xPosition);

	yPosition = yInitialPosition + ySpeed*time;
	yInitialPosition = yPosition;
	console.log('yPosition on air: ' + yPosition);
}

var initialYawOnJumping;
var yawOnLanding;
function calculateLanding(){
	// Calculate 180s
	// first case initialYaw < 0 > 90
	if ( initialYawOnJumping > 0 && initialYawOnJumping < 90 ) {
	    if ( -90 + initialYawOnJumping < yawOnLanding && 90 + initialYawOnJumping > yawOnLanding) { yawOnLanding = yawOnLanding; 
	    	console.log("case 1: final yawOnLanding not 180");}
	    else if ( 90 + initialYawOnJumping < yawOnLanding && yawOnLanding < 179 ) { yawOnLanding = yawOnLanding - 180; 
	    	console.log("case 1: final yawOnLanding -180"); minus180 = true; plus180 = false;}
	    else if ( -90 + initialYawOnJumping > yawOnLanding && yawOnLanding > -179 ) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 1: final yawOnLanding +180"); plus180 = true; minus180 = false;}
  	}

  	// second case initialYaw > 90 < 179
 	if ( initialYawOnJumping > 90 && initialYawOnJumping < 179) {
	    if ( yawOnLanding > 0 && 90 - ( 179 - initialYawOnJumping ) > yawOnLanding ) { yawOnLanding = yawOnLanding - 180 ; 
	    	console.log("case 2: final yawOnLanding -180"); minus180 = true; plus180 = false;}
	    else if ( -90 - (179 - initialYawOnJumping) < yawOnLanding && yawOnLanding < 0 ) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 2: final yawOnLanding + 180"); plus180 = true; minus180 = false;}
	    else { yawOnLanding = yawOnLanding; 
	    	console.log("case 2: final yawOnLanding not 180");}
  	}

  	// Third case initial yaw < 0 > -90
  	if ( initialYawOnJumping < 0 && initialYawOnJumping > -90 ) {
	    if ( yawOnLanding > -179 && yawOnLanding < -90 + initialYawOnJumping) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 3: final yawOnLanding + 180"); plus180 = true; minus180 = false; }
	    else if ( 90 + initialYawOnJumping < yawOnLanding && yawOnLanding < 179 ) { yawOnLanding = yawOnLanding - 180; 
	    	console.log("case 3: final yawOnLanding - 180"); minus180 = true; plus180 = false;}
	    else { yawOnLanding = yawOnLanding; 
	    	console.log("case 3: final yawOnLanding not 180");}
  	}

  	// Fourth case initial yaw > -90 < -179
  	if ( initialYawOnJumping < -90 && initialYawOnJumping > -179 ) {
	    if ( yawOnLanding > 0 && 90 + ( 179 + initialYawOnJumping ) > yawOnLanding ) { yawOnLanding = yawOnLanding - 180; 
	    	console.log("case 4: final yawOnLanding - 180"); minus180 = true; plus180 = false;}
	    else if ( -90 + (179 + initialYawOnJumping ) < yawOnLanding && yawOnLanding < 0 ) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 4: final yawOnLanding + 180"); plus180 = true; minus180 = false;}
	    else { yawOnLanding = yawOnLanding; 
	    	console.log("case 4: final yawOnLanding not 180");}
  	}
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










/*

v = 0.5*9.81*t ===> t = total time on air

z_position = v*t-0.5*9.81*t*t =====> t = elapsed time on air



mat flip 25 intervals on air
*/




























