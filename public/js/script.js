var socket = io.connect('http://localhost:8080');
// Sending 5 seconds of data



var halfJump = false;
var centerPosition = 0;
var interval = 0;
var initial_y_onJumping;
var final_y_onJumping;
var jumpDistance = 0;
var jumpHeight = 0;
var recording = false;
var totalSpeed = 2.3;
var initialYaw, total_angle_diff;
var pi = 3.14;
var xSpeed, ySpeed;
var xPosition = 0;
var xInitialPosition = 0;
var yPosition = 0;
var yInitialPosition = 0;
var time = 0.02;

var minus180 = false;
var plus180 = false;

// var multiplier = 100;
// var airMultiplier = 140;
var multiplier;
var airMultiplier;


// Just landed a trick. Show me.
$('#viewTrick').on('click', function(){
	//console.log('show trick');
	resetValues();
	socket.emit('trick data');
	multiplier = 100;
	airMultiplier = 150;
	// if (recording) {
	// 	recording = false;
	// 	socket.emit('trick data');
	// 	console.log('Receiving data');
	// } else {
	// 	recording = true;
	// 	socket.emit('trick start');
	// 	console.log('Recording');
	// }
})

// trick test
$('#trick_one').on('click', function(){
	multiplier = 100;
	airMultiplier = 100;

	resetValues();
	show_visualizationPage();
	//render();
	parseData(trick_one);
	//console.log(trickTest);
	switchState();
	//console.log($total_x_positions);
	init_Visualization();
	animate();
})

$('#trick_two').on('click', function(){
	multiplier = 100;
	airMultiplier = 100;

	resetValues();
	show_visualizationPage();
	//render();
	parseData(trick_two);
	//console.log(trickTest);
	switchState();
	//console.log($total_x_positions);
	init_Visualization();
	animate();
})

$('#trick_three').on('click', function(){

	multiplier = 100;
	airMultiplier = 100;

	resetValues();
	show_visualizationPage();
	//render();
	parseData(trick_three);
	//console.log(trickTest);
	switchState();
	//console.log($total_x_positions);
	init_Visualization();
	animate();
})

var line;
var $y_Accel = [],
	$z_Accel = [],
	$yaw = [],
	$pitch = [],
	$roll = [],
	$state = [],
	$air_ground = [];

var $total_x_positions = [];
var $total_y_positions = [];
var $total_z_positions = [];
var $total_yaws = [];
var $total_pitchs = [];
var $total_rolls = [];

var z_Accel;
var state;

// Recieve trick
socket.on('trickData', function(trickData){
	//console.log(trickData);
	show_visualizationPage();
	parseData(trickData);
	//console.log($state);
	switchState();
	init_Visualization();
	animate();
	//onGround();
	//console.log('---------------------------------------------------------------------------');
	// reset all values to call next trick
	//resetValues();
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
	airtime = 0;
	total_time_on_air = 0;
	plus180 = false;
	minus180 = false;
	// Loop through all the trick data
	for (var i = 0; i < data.length; i++) {
		line = data[i];
		//console.log(line);

		// if (line[0] == Number.isNaN()) {
		// 	line[0] = $y_Accel[i-1];
		// }

		// z accel transform to decimal
		// line[1] = line[1]/10;
		console.log(line[1] + 'z_Accel');

		 if (isNaN(line[1]) == true) {
		 	 line[1] = $z_Accel[i-1];
			console.log('NaN detected' + $z_Accel[i-1])
		 }


		 if (isNaN(line[2]) == true) {
		 	 line[2] = $yaw[i-1];
		 }

		 if (isNaN(line[3]) == true) {
		 	 line[3] = $pitch[i-1];
		 }

		 if (isNaN(line[4]) == true) {
		 	 line[4] = $roll[i-1];
		 }


		// Reset to zero if y accel is to small
		if (line[0] <= 5 && line[0] >= -5){ line[0] = 0; } 
		

		// Reset to zero if z accel is to small
		if (line[1] <= 5 && line[1] >= -5){ line[1] = 0; console.log("accel is zero")} 
		
		if (line[0] !== 0 || line[1] !== 0) {
			$air_ground.push(1);
		} else { $air_ground.push(0);}


		$y_Accel.push(line[0]);
		$z_Accel.push(line[1]);
		$yaw.push(line[2]);
		$pitch.push(line[3]);
		$roll.push(line[4]);



	}

	var average = 0, 
		sliced,
		slice_num = 8,
		slice_start = 0,
		target_average = 0.5;
	for (i=0; i<$air_ground.length;++i) {
		average = 0;
		slice_start = i >= slice_num/2 ? i-slice_num/2 : 0;
		sliced = $air_ground.slice(slice_start, slice_start + slice_num);
		sliced.forEach(function(value,index){
			//if (value < 0){ value = value*-1;}
			average += value == 0 ? 0 : 1;
			console.log(value);
		});
		average = average / slice_num;

		if (average >= target_average) {
			$state.push('air');
			airtime += 1;
		} else {
			$state.push('ground');
		}		
	}

	console.log('STATE length: ' + $state.length);

	total_time_on_air = airtime*0.02;
	console.log($state);
	console.log('AIR TIME: ' + total_time_on_air);
	// console.log('SPEED: ' + totalSpeed)


	airSpeed = 0.5*gravity*total_time_on_air;
	//console.log(airSpeed);
}


var thisState;
var k;
// var jumpHeight;
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

	console.log('AIR TIME: ' + total_time_on_air);
	console.log('SPEED: ' + totalSpeed);
	console.log('HEIGHT: ' + jumpHeight.toFixed(2));
	console.log('JUMP DISTANCE: ' + jumpDistance.toFixed(2));

	// $('#airtime .number').text(total_time_on_air.toFixed(2));
	// $('#airtime .number span').text('S');
	$('#airtime h1').html(total_time_on_air.toFixed(2) + '<span> S</span></h1>');
	$('#altitude h1').html(jumpHeight.toFixed(2) + '<span> M</span></h1>');
	$('#distance h1').html(jumpDistance.toFixed(2) + '<span> M</span></h1>');
}

// var totalSpeed = 2.5;
// var initialYaw, total_angle_diff;
// var pi = 3.14;
// var xSpeed, ySpeed;
// var xPosition, xInitialPosition = 0;
// var yPosition, yInitialPosition = 0;
// var time = 0.02;

// var minus180 = false;
// var plus180 = false;
function onGround(){
	console.log('on ground');
	console.log('xPosition: ' + xPosition);
	console.log('x initial position : ' + xInitialPosition);
	elapsed_time_on_air = 0;
	air_interval = 0;

	interval += 1;

	// if (jump == true){
	// 	jump = false;
	// 	// console.log("total_time_on_air====>: " + total_time_on_air);
	// 	console.log("x position ====>: " + xPosition);
	// 	centerPosition = xPosition*-1;
	// 	console.log('centerPosition ' + centerPosition)
	// }

	// if there have been a 180
	if ( plus180 == true ) { $yaw[k] = $yaw[k] + 180; $roll[k] = $roll[k] *-1; $pitch[k] = $pitch[k] *-1;}
  	if ( minus180 == true ) { $yaw[k] = $yaw[k] - 180; $roll[k] = $roll[k] *-1; $pitch[k] = $pitch[k] *-1; }

	initialYaw = $yaw[0];
	console.log('initialYaw: ' + initialYaw);

	//for(var j = 0; j < $yaw.length; j++){
		//console.log('yaw: ' + $yaw[j]);
		// if ($yaw[k] < 0 && initialYaw > 0) {
		// 	total_angle_diff = $yaw[k] - initialYaw;
		// } else if ($yaw[k] > 0 && initialYaw < 0 ){
		// 	total_angle_diff = $yaw[k] + initialYaw;
		// } else {
		// 	total_angle_diff = $yaw[k] - initialYaw;
		// }
		total_angle_diff = $yaw[k] - initialYaw;

		// transform it to radians
		total_angle_diff = total_angle_diff*pi/180;
		//console.log("total_angle_diff: " + total_angle_diff);

		// Calculate x speed
		xSpeed = totalSpeed*Math.sin(total_angle_diff);
		console.log('xSpeed: ' + xSpeed);
		// Calculate x position
		xPosition = xInitialPosition + xSpeed*time;

		console.log('xPosition: ' + xPosition);
		xInitialPosition = xPosition;
		
		console.log('xposition: ' + xPosition);

		// Calculate y position
		ySpeed = totalSpeed*Math.cos(total_angle_diff);
		//console.log('ySpeed: ' + ySpeed);
		// Calculate yPosition
		yPosition = yInitialPosition + ySpeed*time;
		yInitialPosition = yPosition;
		
		//console.log('yPosition: ' + yPosition);

		z_position = 0;

		$pitch[k] = 0;
		// Save yaw, pitch, roll
		$total_yaws.push(total_angle_diff);
		$total_pitchs.push($pitch[k]);
		$total_rolls.push($roll[k]);
		$total_x_positions.push(xPosition);
		$total_y_positions.push(yPosition);
		$total_z_positions.push(z_position);
	//}
}

var air_interval = 0;
var elapsed_time_on_air;
var z_position = 0;
function onAir(){
	//console.log("total_time_on_air====>: " + total_time_on_air);
	// Calculate z position
	console.log('on air');
	air_interval += 1;
	elapsed_time_on_air = air_interval*0.02;
	//console.log('elapsed_time_on_air: ' + elapsed_time_on_air);


	z_position = airSpeed*elapsed_time_on_air-0.5*gravity*elapsed_time_on_air*elapsed_time_on_air;
	//console.log('z position: ' + z_position);

	// detect first jump moment
	if (elapsed_time_on_air == 0.02) {
		
		initialYawOnJumping = $yaw[k];
		initial_y_onJumping = yPosition;
	}

	// detect landing moment
	if (elapsed_time_on_air == total_time_on_air) {
		yawOnLanding = $yaw[k];
		//console.log('landing');
		calculateLanding();
		final_y_onJumping = yPosition;
		jumpDistance = final_y_onJumping - initial_y_onJumping;
		// console.log('JUMP DISTANCE: ' + jumpDistance);
	}

	// Keep x and y speed and positions constant
	xPosition = xInitialPosition + xSpeed*time;
	//console.log('xPosition on air: ' + yPosition);
	xInitialPosition = xPosition;
	//console.log('xposition on air: ' + xPosition);

	yPosition = yInitialPosition + ySpeed*time;
	yInitialPosition = yPosition;
	//console.log('yPosition on air: ' + yPosition);

	interval += 1;
	if (elapsed_time_on_air >= total_time_on_air/2 && halfJump == false){
		halfJump = true;
		console.log('now --------------------------' + multiplier);
		// console.log('HEIGHT: ' + z_position);
		jumpHeight = z_position;
		//centerPosition = xPosition*100*interval/2;
		centerPosition = yPosition*100*-1;
		console.log(xPosition + ' ---> ' + yPosition);
	}



	// }
	// console.log('total angle difference: ' + total_angle_diff);
	total_angle_diff = $yaw[k] - initialYaw;
	total_angle_diff = total_angle_diff*pi/180;


	$total_x_positions.push(xPosition);
	$total_y_positions.push(yPosition);
	$total_z_positions.push(z_position);
	$total_yaws.push(total_angle_diff);
	$total_pitchs.push($pitch[k]*-1);
	$total_rolls.push($roll[k]*-1);
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

	$y_Accel = [],
	$z_Accel = [],
	$yaw = [],
	$pitch = [],
	$roll = [],
	$state = [];
	$air_ground = [];

	$total_x_positions = [];
	$total_y_positions = [];
	$total_z_positions = [];
	$total_yaws = [];
	$total_pitchs = [];
	$total_rolls = [];

	interval = 0;
	centerPosition = 0;
	initial_y_onJumping = 0;
	final_y_onJumping = 0;
	halfJump = false;
	jumpDistance = 0;
	jumpHeight = 0;
}

