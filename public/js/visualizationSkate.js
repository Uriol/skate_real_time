
// Setup environment
var camera, scene, renderer;


init();
animate();

function init(){

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	$('#visualizationPage').append(renderer.domElement);

	

	var geometry = new THREE.BoxGeometry( 20,20,20 );

	for ( var i = 0; i < 10; i ++ ) {
		
		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

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


	
	// renderer.sortObjects = false;
	// container.appendChild(renderer.domElement);


	window.addEventListener( 'resize', onWindowResize, false );

	controls = new THREE.OrbitControls(camera, document, renderer.domElement);
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}


// scene.add(cubes);
 // camera.position.z = 2

// Add OrbitControls so that we can pan around with the mouse.


function animate(){


	requestAnimationFrame(animate);

	 // cube.rotation.x += 0.001;
	 // cube.rotation.y += 0.001;


	controls.update();
	render();

}

function render(){
		renderer.render(scene, camera);
}