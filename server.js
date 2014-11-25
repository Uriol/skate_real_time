
console.log('hello');


var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	io = require("socket.io");

var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

// connect to the sensor bluetooth
btSerial.on('found', function(address, name) {
    btSerial.findSerialPortChannel(address, function(channel) {
        btSerial.connect(address, channel, function() {
            console.log('sensor connected');

            
            btSerial.on('data', function(buffer) {
				parse( buffer.toString() );

            });

        }, function () {
            console.log('cannot connect');
        });

        // close the connection when you're ready
        btSerial.close();

    }, function() {
        console.log('found nothing');
    });
});

btSerial.inquire();

   btSerial.listPairedDevices(function(pairedDevices) {
        pairedDevices.forEach(function(device) {
            console.log(device);
        });
    })

// organize sensor data
var $chunk = '',
	$line = '',
	$data = [];

function parse( data ) {
	$chunk += data;
	$line = '';

	if ($chunk.indexOf("\n") > 0) {
		$chunk = $chunk.slice( $chunk.indexOf("\n") );
	}

	if ($chunk.lastIndexOf("\n") > 0) {
		$line = $chunk.slice(1, $chunk.lastIndexOf("\n") );
		$chunk = $chunk.slice( $chunk.lastIndexOf("\n") );
	}

	if ($line != '') {
		//console.log($line);
		var split = $line.split(',');
		// var lineObject = {
		// 	xA: 	parseInt(split[0]),
		// 	zA: 	parseInt(split[1]),
		// 	yaw: 	parseInt(split[2]),
		// 	pitch: 	parseInt(split[3]),
		// 	roll: 	parseInt(split[4])
		// }

		var lineObject = [
			parseInt(split[0]),
			parseInt(split[1]),
			parseInt(split[2]),
			parseInt(split[3]),
			parseInt(split[4])
		]

		$line = '';
		$data.push( lineObject );
		console.log(lineObject);
		//$data = []
	}
}







var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

// Initial path
var webroot = 'public';


// Create server
var server = http.createServer(function(req,res){

	// File path
	var fileToLoad = webroot + url.parse(req.url).pathname;

	// If its the www directory open index.html
	if (req.url == '/') {
		fileToLoad = 'public/index.html';
	}

	var fileBytes;
	var httpStatusCode = 200;


	// Check if the file exist
	fs.exists(fileToLoad, function(doesItExist) {

		// if it doesn't exist load error404.html
		if (!doesItExist) {
			console.log('does not exist');
			httpStatusCode = 404;
			fileToLoad = webroot + '/error404.html';
		}

		// know what kind of file it is
		fileBytes = fs.readFileSync(fileToLoad);
		var mimeType = mimeTypes[path.extname(fileToLoad).split('.')[1]];

		res.writeHead(httpStatusCode, {'Content-Type': mimeType});
		res.end(fileBytes);
	})
}).listen(8080, '127.0.0.1');
//server.listen(8080, '127.0.0.1');


var trickData;

	// Socket connection
	var socketServer = io.listen(server);
	socketServer.sockets.on('connection', function(socket) {


		socket.on('hello', function(data){
			console.log(data);
		})

		socket.on('trick data', function(){
			console.log('recieved send me data');
			
			if ($data.length >= 21){
				trickData = $data.slice(-150);
				console.log(trickData);
				socket.emit('trickData', trickData);
			}	else if ($data.length <= 149){
				console.log('not enought data recorded');
				socket.emit('not enought');
			}

		})
	
	})










