
// Setup environment
var camera, scene, renderer;


// init_Visualization();
// animate();

function init_Visualization(){

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	scene = new THREE.Scene();
	// camera.position.set( 90, 0, 10 );
	// camera.position.x = 50;
	// camera.position.z = 50;
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);
	 // camera.position.x = 500;

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	$('#visualizationPage').append(renderer.domElement);

	controls = new THREE.OrbitControls( camera );
	//controls = new THREE.TrackballControls( camera );
  	

	var geometry = new THREE.BoxGeometry( 20,20,20 );
	

	var this_x_position;
	var this_y_position;
	for ( var i = 0; i < $total_x_positions.length; i ++ ) {
		this_x_position = $total_x_positions[i];
		this_y_position = $total_y_positions[i];

		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

		object.position.x = this_y_position*100;
		object.position.z = this_x_position*100;



		// object.rotation.x = -Math.PI/2;
		// object.rotation.y = -0.5;
		//object.position.set(this_y_position, 0, this_x_position)
		 
		// object.position.y = this_y_position*-100;
		// object.position.z = 0;


		// object.translateX(2.5);
		// object.translateY(2);
		// object.position.y = Math.random() * 800 - 400;
		// object.position.z = Math.random() * 800 - 400;

		// object.rotation.x = Math.random() * 2 * Math.PI;
		// object.rotation.y = Math.random() * 2 * Math.PI;
		// object.rotation.z = Math.random() * 2 * Math.PI;

		// object.scale.x = Math.random() + 0.5;
		// object.scale.y = Math.random() + 0.5;
		// object.scale.z = Math.random() + 0.5;


		scene.add( object );
	}


	var floorMaterial = new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.rotation.x = -Math.PI / 2;
	scene.add(floor);

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

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