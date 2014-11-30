// Setup environment
var camera, scene, renderer;
camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer();

init_Visualization();
animate();



function init_Visualization(){

	camera.position.set(0,50,100);
	camera.lookAt(scene.position);

	renderer.setClearColor( 0xf0f0f0 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	$('body').append(renderer.domElement);

	controls = new THREE.OrbitControls( camera );


	var skateboard = new THREE.Object3D();

	// skateboard
	// top
	var topGeometry = new THREE.PlaneGeometry( 48,12 );
	var black = new THREE.Color("rgb(0,0,0)");
	var topMaterial = new THREE.MeshBasicMaterial(  {color: black}  );
	var top = new THREE.Mesh(topGeometry, topMaterial);
	top.position.y = 2;
	top.rotation.x = -Math.PI / 2;
	skateboard.add(top);

	// bottom
	var red = new THREE.Color("rgb(250,0,0)");
	var bottomMaterial = new THREE.MeshBasicMaterial(  {color: black}  );
	var bottomGeometry = new THREE.PlaneGeometry( 48,12 );
	var bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
	bottom.position.y = 1;
	bottom.rotation.x = Math.PI / 2;
	skateboard.add(bottom);
	
	// right edge
	var edgeGeometry = new THREE.PlaneGeometry( 48,1 );
	var green = new THREE.Color("rgb(0,255,0)");
	var rightEdgeMaterial = new THREE.MeshBasicMaterial(  {color: green}  );
	var rightEdge = new THREE.Mesh(edgeGeometry, rightEdgeMaterial);
	rightEdge.position.y = 1.5;
	rightEdge.position.z = 6;
	skateboard.add(rightEdge);

	// left edge
	var leftEdgeGeometry = new THREE.PlaneGeometry( 48,1 );
	var yellow = new THREE.Color("rgb(0,255,255)");
	var leftEdgeMaterial = new THREE.MeshBasicMaterial(  {color: yellow}  );
	var leftEdge = new THREE.Mesh(leftEdgeGeometry, leftEdgeMaterial);
	leftEdge.position.y = 1.5;
	leftEdge.position.z = -6;
	skateboard.add(leftEdge);
	leftEdge.rotation.x = Math.PI;




var geometry = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle. 
// var vertexPositions = [ 
// 	[-1.0, -1.0,  1.0],
// 	[ 1.0, -1.0,  1.0],
// 	[ 1.0,  1.0,  1.0],

// 	[ 1.0,  1.0,  1.0],
// 	[-1.0,  1.0,  1.0],
// 	[-1.0, -1.0,  1.0]
// ];

var noseTopPositions = [ 
	[24, 2,  6],
	[ 24.5, 2.15,  6],
	[ 24.5, 2.15,  -6],

	[ 24.5,  2.15,  -6],
	[ 24,  2,  -6],
	[ 24,  2,  6],

	[24.5, 2.15,  6],
	[ 25, 2.30,  6],
	[ 25,  2.30,  -6],

	[ 25,  2.30,  -6],
	[ 24.5, 2.15,  -6],
	[ 24.5,  2.15,  6],

	[25, 2.30,  6],
	[ 25.5, 2.45,  6],
	[ 25.5,  2.45,  -6],

	[ 25.5,  2.45,  -6],
	[ 25,  2.30,  -6],
	[ 25,  2.30,  6],

	[25.5, 2.45,  6],
	[ 26, 2.60,  6],
	[ 26,  2.60,  -6],

	[ 26,  2.60,  -6],
	[ 25.5,  2.45,  -6],
	[ 25.5,  2.45,  6],


	[26, 2.60,  6],
	[ 26.5, 2.75,  6],
	[ 26.5,  2.75,  -6],

	[ 26.5,  2.75,  -6],
	[ 26,  2.60,  -6],
	[ 26,  2.60,  6],

	[26.5, 2.75,  6],
	[ 27, 2.90,  6],
	[ 27,  2.90,  -6],

	[ 27,  2.90,  -6],
	[ 26.5,  2.75,  -6],
	[ 26.5,  2.75,  6],



	[ 27, 2.90,  6],
	[27.5, 3.05, 5.9],
	[27.5, 3.05, -5.9],

	[27.5, 3.05, -5.9],
	[27, 2.90, -6],
	[27, 2.90, 6],

	[27.5, 3.05, 5.9],
	[28, 3.20, 5.8],
	[28, 3.20, -5.8],

	[28, 3.20, -5.8],
	[27.5, 3.05, -5.9],
	[27.5, 3.05, 5.9],

	[28, 3.20, 5.8],
	[28.5, 3.35, 5.7],
	[28.5, 3.35, -5.7],

	[28.5, 3.35, -5.7],
	[28, 3.20, -5.8],
	[28, 3.20, 5.8],

	[28.5, 3.35, 5.7],
	[29, 3.50, 5.6],
	[29, 3.50, -5.6],

	[29, 3.50, -5.6],
	[28.5, 3.35, -5.7],
	[28.5, 3.35, 5.7],

	[29, 3.50, 5.6],
	[29.5, 3.65, 5.5],
	[29.5, 3.65, -5.5],

	[29.5, 3.65, -5.5],
	[29, 3.50, -5.6],
	[29, 3.50, 5.6],

	[29.5, 3.65, 5.5],
	[30, 3.80, 5.4],
	[30, 3.80, -5.4],

	[30, 3.80, -5.4],
	[29.5, 3.65, -5.5],
	[29.5, 3.65, 5.5],

	[30, 3.80, 5.4],
	[30.5, 3.95, 5.2],
	[30.5, 3.95, -5.2],

	[30.5, 3.95, -5.2],
	[30, 3.80, -5.4],
	[30, 3.80, 5.4],

	[30.5, 3.95, 5.2],
	[31, 4.1, 5],
	[31, 4.1, -5],

	[31, 4.1, -5],
	[30.5, 3.95, -5.2],
	[30.5, 3.95, 5.2],

	[31, 4.1, 5],
	[31.5,4.25, 4.7],
	[31.5, 4.25, -4.7],

	[31.5, 4.25, -4.7],
	[31, 4.1, -5],
	[31, 4.1, 5],

	[31.5, 4.25, 4.7],
	[32, 4.40, 4.5],
	[32, 4.40, -4.5],

	[32, 4.40, -4.5],
	[31.5, 4.25, -4.7],
	[31.5, 4.25, 4.7],

	[32, 4.40, 4.5],
	[32.5, 4.55, 4],
	[32.5, 4.55, -4],

	[32.5, 4.55, -4],
	[32, 4.40, -4.5],
	[32, 4.40, 4.5],

	[32.5, 4.55, 4],
	[33, 4.70, 3.5],
	[33, 4.70, -3.5],

	[33, 4.70, -3.5],
	[32.5, 4.55, -4],
	[32.5, 4.55, 4],

	[33, 4.70, 3.5],
	[33.5, 4.85, 2.5],
	[33.5, 4.85, -2.5],

	[33.5, 4.85, -2.5],
	[33, 4.70, -3.5],
	[33, 4.70, 3.5],

	[33.5, 4.85, 2.5],
	[34, 5, 0],
	[33.5, 4.85, -2.5]
];

var vertices = new Float32Array( noseTopPositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < noseTopPositions.length; i++ )
{
	vertices[ i*3 + 0 ] = noseTopPositions[i][0];
	vertices[ i*3 + 1 ] = noseTopPositions[i][1];
	vertices[ i*3 + 2 ] = noseTopPositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: black } );
var mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);
// -----------------------------------------------------

	//skateboard.add(topNose);
	scene.add(skateboard);


	// add floor
	var floorColor = new THREE.Color("rgb(100,100,100)");
	var floorMaterial = new THREE.MeshBasicMaterial(  {color: floorColor}  );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -1;
	floor.rotation.x = -Math.PI / 2;
	//scene.add(floor);

	var floorGeometry2 = new THREE.PlaneGeometry(1000, 1000);
	var floor2 = new THREE.Mesh(floorGeometry2, floorMaterial);
	floor2.rotation.x = Math.PI / 2;
	floor2.position.y = -1;
	//scene.add(floor2);
	window.addEventListener( 'resize', onWindowResize, false );
}


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate(){

	requestAnimationFrame(animate);
	controls.update();
	render();

}

function render(){
	renderer.render(scene, camera);
}