
// Setup environment
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
$('#visualizationPage').append(renderer.domElement);

// Create an event listener that resizes the renderer with the browser window.
window.addEventListener('resize', function() {
	var WIDTH = window.innerWidth,
	    HEIGHT = window.innerHeight;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
});


var cubes = [];

// // draw cube
// var geometry = new THREE.BoxGeometry(2,1,0.2);
// // var geometry = new THREE.BoxGeometry(2,1,0.1);
// var material = new THREE.MeshNormalMaterial();
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

//
makeCubes();
var geometry, material, cube;
geometry = new THREE.BoxGeometry(2,1,0.2);
function makeCubes(){

	for (var i = 0; i <= 5; i++){
		 var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff }));
		 
		 object.position.x = Math.random() * 800 - 400;
					object.position.y = Math.random() * 800 - 400;
					object.position.z = Math.random() * 800 - 400;

					object.rotation.x = Math.random() * 2 * Math.PI;
					object.rotation.y = Math.random() * 2 * Math.PI;
					object.rotation.z = Math.random() * 2 * Math.PI;

					object.scale.x = Math.random() + 0.5;
					object.scale.y = Math.random() + 0.5;
					object.scale.z = Math.random() + 0.5;

					scene.add( object );
	}
}


// scene.add(cubes);
 camera.position.z = 2

// Add OrbitControls so that we can pan around with the mouse.
controls = new THREE.OrbitControls(camera, document, renderer.domElement);

var render = function(){


	requestAnimationFrame(render);

	 // cube.rotation.x += 0.001;
	 // cube.rotation.y += 0.001;

	renderer.render(scene, camera);
	controls.update();

}

render();