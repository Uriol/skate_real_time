var socket = io.connect('http://localhost:8080');



// Just landed a trick. Show me.
$('#viewTrick').on('click', function(){
	console.log('show trick');
	socket.emit('trick data');
})

var line;
var $x_Accel = [],
	$y_Accel = [],
	$yaw = [],
	$pitch = [],
	$roll = [];




// Recieve trick
socket.on('trickData', function(trickData){
	//console.log(trickData);
	parseData(trickData);
	onGround();
	
})

// Not enought data
socket.on('not enought', function(){
	console.log('Not enought data recieved');
})


function parseData( data ) {

	// Loop through all the trick data
	for (var i = 0; i < data.length; i++) {
		line = data[i];
		//console.log(line);

		$x_Accel.push(line[0]);
		$y_Accel.push(line[1]);
		$yaw.push(line[2]);
		$pitch.push(line[3]);
		$roll.push(line[4]);
	}

}

var totalSpeed = 2;
var initialYaw, total_angle_diff;
var pi = 3.14;


function onGround(){
	initialYaw = $yaw[0]*pi/180;
	console.log(initialYaw);

	for(var j = 0; j < $yaw.length; j++){

		total_angle_diff = $yaw[j]*pi/180 - initialYaw;
		console.log('yaw in degrees: ' + $yaw[j]);
		console.log('yaw in radians: ' + $yaw[j]*pi/180);
		console.log("total_angle_diff: " + total_angle_diff);
	}
}
