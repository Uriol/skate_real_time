// Setup environment
var camera, scene, renderer;
camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer();

init_Visualization();
animate();




function init_Visualization(){
	var increment = 0.5;
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
	bottom.position.y = 1.5;
	bottom.rotation.x = Math.PI / 2;
	skateboard.add(bottom);
	
	// right edge
	 var edgeGeometry = new THREE.PlaneGeometry( 48,0.5 );
	 var green = new THREE.Color("rgb(0,255,0)");
	var rightEdgeMaterial = new THREE.MeshBasicMaterial(  {color: green}  );
	var rightEdge = new THREE.Mesh(edgeGeometry, rightEdgeMaterial);
	rightEdge.position.y = 1.75;
	rightEdge.position.z = 6;
	skateboard.add(rightEdge);

	// // left edge
	 var leftEdgeGeometry = new THREE.PlaneGeometry( 48,0.5 );
	 var yellow = new THREE.Color("rgb(0,255,255)");
	var leftEdgeMaterial = new THREE.MeshBasicMaterial(  {color: yellow}  );
	var leftEdge = new THREE.Mesh(leftEdgeGeometry, leftEdgeMaterial);
	leftEdge.position.y = 1.75;
	leftEdge.position.z = -6;
	skateboard.add(leftEdge);
	leftEdge.rotation.x = Math.PI;

 var red = new THREE.Color("rgb(255,0,0)");

// top nose ----------------------------------------------------------------
var noseTop = new THREE.BufferGeometry();

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
noseTop.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: black } );
var topNoseMesh = new THREE.Mesh( noseTop, material );
topNoseMesh.material.side = THREE.DoubleSide;
scene.add(topNoseMesh);


// bottom nose ----------------------------------------------------------------
var noseBottom = new THREE.BufferGeometry();console.log(increment);
var noseBottomPositions = [ 
	[24, 1+increment,  6],
	[ 24.5, 1.15+increment,  6],
	[ 24.5, 1.15+increment,  -6],

	[ 24.5,  1.15+increment,  -6],
	[ 24,  1+increment,  -6],
	[ 24,  1+increment,  6],

	[24.5, 1.15+increment,  6],
	[ 25, 1.30+increment,  6],
	[ 25,  1.30+increment,  -6],

	[ 25,  1.30+increment,  -6],
	[ 24.5, 1.15+increment,  -6],
	[ 24.5,  1.15+increment,  6],

	[25, 1.30+increment,  6],
	[ 25.5, 1.45+increment,  6],
	[ 25.5,  1.45+increment,  -6],

	[ 25.5,  1.45+increment,  -6],
	[ 25,  1.30+increment,  -6],
	[ 25,  1.30+increment,  6],

	[25.5, 1.45+increment,  6],
	[ 26, 1.60+increment,  6],
	[ 26,  1.60+increment,  -6],

	[ 26,  1.60+increment,  -6],
	[ 25.5,  1.45+increment,  -6],
	[ 25.5,  1.45+increment,  6],


	[26, 1.60+increment,  6],
	[ 26.5, 1.75+increment,  6],
	[ 26.5,  1.75+increment,  -6],

	[ 26.5,  1.75+increment,  -6],
	[ 26,  1.60+increment,  -6],
	[ 26,  1.60+increment,  6],

	[26.5, 1.75+increment,  6],
	[ 27, 1.90+increment,  6],
	[ 27,  1.90+increment,  -6],

	[ 27,  1.90+increment,  -6],
	[ 26.5,  1.75+increment,  -6],
	[ 26.5,  1.75+increment,  6],



	[ 27, 1.90+increment,  6],
	[27.5, 2.05+increment, 5.9],
	[27.5, 2.05+increment, -5.9],

	[27.5, 2.05+increment, -5.9],
	[27, 1.90+increment, -6],
	[27, 1.90+increment, 6],

	[27.5, 2.05+increment, 5.9],
	[28, 2.20+increment, 5.8],
	[28, 2.20+increment, -5.8],

	[28, 2.20+increment, -5.8],
	[27.5, 2.05+increment, -5.9],
	[27.5, 2.05+increment, 5.9],

	[28, 2.20+increment, 5.8],
	[28.5, 2.35+increment, 5.7],
	[28.5, 2.35+increment, -5.7],

	[28.5, 2.35+increment, -5.7],
	[28, 2.20+increment, -5.8],
	[28, 2.20+increment, 5.8],

	[28.5, 2.35+increment, 5.7],
	[29, 2.50+increment, 5.6],
	[29, 2.50+increment, -5.6],

	[29, 2.50+increment, -5.6],
	[28.5, 2.35+increment, -5.7],
	[28.5, 2.35+increment, 5.7],

	[29, 2.50+increment, 5.6],
	[29.5, 2.65+increment, 5.5],
	[29.5, 2.65+increment, -5.5],

	[29.5, 2.65+increment, -5.5],
	[29, 2.50+increment, -5.6],
	[29, 2.50+increment, 5.6],

	[29.5, 2.65+increment, 5.5],
	[30, 2.80+increment, 5.4],
	[30, 2.80+increment, -5.4],

	[30, 2.80+increment, -5.4],
	[29.5, 2.65+increment, -5.5],
	[29.5, 2.65+increment, 5.5],

	[30, 2.80+increment, 5.4],
	[30.5, 2.95+increment, 5.2],
	[30.5, 2.95+increment, -5.2],

	[30.5, 2.95+increment, -5.2],
	[30, 2.80+increment, -5.4],
	[30, 2.80+increment, 5.4],

	[30.5, 2.95+increment, 5.2],
	[31, 3.1+increment, 5],
	[31, 3.1+increment, -5],

	[31, 3.1+increment, -5],
	[30.5, 2.95+increment, -5.2],
	[30.5, 2.95+increment, 5.2],

	[31, 3.1+increment, 5],
	[31.5,3.25+increment, 4.7],
	[31.5, 3.25+increment, -4.7],

	[31.5, 3.25+increment, -4.7],
	[31, 3.1+increment, -5],
	[31, 3.1+increment, 5],

	[31.5, 3.25+increment, 4.7],
	[32, 3.40+increment, 4.5],
	[32, 3.40+increment, -4.5],

	[32, 3.40+increment, -4.5],
	[31.5, 3.25+increment, -4.7],
	[31.5, 3.25+increment, 4.7],

	[32, 3.40+increment, 4.5],
	[32.5, 3.55+increment, 4],
	[32.5, 3.55+increment, -4],

	[32.5, 3.55+increment, -4],
	[32, 3.40+increment, -4.5],
	[32, 3.40+increment, 4.5],

	[32.5, 3.55+increment, 4],
	[33, 3.70+increment, 3.5],
	[33, 3.70+increment, -3.5],

	[33, 3.70+increment, -3.5],
	[32.5, 3.55+increment, -4],
	[32.5, 3.55+increment, 4],

	[33, 3.70+increment, 3.5],
	[33.5, 3.85+increment, 2.5],
	[33.5, 3.85+increment, -2.5],

	[33.5, 3.85+increment, -2.5],
	[33, 3.70+increment, -3.5],
	[33, 3.70+increment, 3.5],

	[33.5, 3.85+increment, 2.5],
	[34, 4+increment, 0],
	[33.5, 3.85+increment, -2.5]
];

var vertices = new Float32Array( noseBottomPositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < noseBottomPositions.length; i++ )
{
	vertices[ i*3 + 0 ] = noseBottomPositions[i][0];
	vertices[ i*3 + 1 ] = noseBottomPositions[i][1];
	vertices[ i*3 + 2 ] = noseBottomPositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
noseBottom.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: black } );

var bottomNoseMesh = new THREE.Mesh( noseBottom, material );
bottomNoseMesh.material.side = THREE.DoubleSide;
scene.add(bottomNoseMesh);

// -----------------------------------------------------

// nose right edge
var noseRightEdge = new THREE.BufferGeometry();

var noseRightEdgePositions = [
	[24,1+increment,6],
	[24.5,1.15+increment,6],
	[24.5, 2.15, 6],

	[24.5, 2.15, 6],
	[24, 2, 6],
	[24, 1+increment, 6],

	[24.5, 1.15+increment, 6],
	[25, 1.3+increment, 6],
	[25, 2.3, 6],

	[25, 2.3, 6],
	[24.5, 2.15, 6],
	[24.5, 1.15+increment, 6],

	[25, 1.3+increment, 6],
	[25.5, 1.45+increment, 6],
	[25.5, 2.45, 6],

	[25.5, 2.45, 6],
	[25, 2.3, 6],
	[25, 1.3+increment, 6],

	[25.5, 1.45+increment, 6],
	[26, 1.6+increment, 6],
	[26, 2.6, 6],

	[26, 2.6, 6],
	[25.5, 2.45, 6],
	[25.5, 1.45+increment, 6],

	[26, 1.6+increment, 6],
	[26.5, 1.75+increment, 6],
	[26.5, 2.75, 6],

	[26.5, 2.75, 6],
	[26, 2.6, 6],
	[26, 1.6+increment, 6],

	[26.5, 1.75+increment, 6],
	[27, 1.9+increment, 6],
	[27, 2.9, 6],

	[27, 2.9, 6],
	[26.5, 2.75, 6],
	[26.5, 1.75+increment, 6],

	[27, 1.9+increment, 6],
	[27.5, 2.05+increment, 5.9],
	[27.5, 3.05, 5.9],

	[27.5, 3.05, 5.9],
	[27, 2.9, 6],
	[27, 1.9+increment, 6],

	[27.5, 2.05+increment, 5.9],
	[28, 2.2+increment, 5.8],
	[28, 3.2, 5.8],

	[28, 3.2, 5.8],
	[27.5, 3.05, 5.9],
	[27.5, 2.05+increment, 5.9],

	[28, 2.2+increment, 5.8],
	[28.5, 2.35+increment, 5.7],
	[28.5, 3.35, 5.7],

	[28.5, 3.35, 5.7],
	[28, 3.2, 5.8],
	[28, 2.2+increment, 5.8],

	[28.5, 2.35+increment, 5.7],
	[29, 2.5+increment, 5.6],
	[29, 3.5, 5.6],

	[29, 3.5, 5.6],
	[28.5, 3.35, 5.7],
	[28.5, 2.35+increment, 5.7],

	[29, 2.5+increment, 5.6],
	[29.5, 2.65+increment, 5.5],
	[29.5, 3.65, 5.5],

	[29.5, 3.65, 5.5],
	[29, 3.5, 5.6],
	[29, 2.5+increment, 5.6],

	[29.5, 2.65+increment, 5.5],
	[30, 2.8+increment, 5.4],
	[30, 3.8, 5.4],

	[30, 3.8, 5.4],
	[29.5, 3.65, 5.5],
	[29.5, 2.65+increment, 5.5],

	[30, 2.8+increment, 5.4],
	[30.5, 2.95+increment, 5.2],
	[30.5, 3.95, 5.2],

	[30.5, 3.95, 5.2],
	[30, 3.8, 5.4],
	[30, 2.8+increment, 5.4],

	[30.5, 2.95+increment, 5.2],
	[31, 3.1+increment, 5],
	[31, 4.1, 5],

	[31, 4.1, 5],
	[30.5, 3.95, 5.2],
	[30.5, 2.95+increment, 5.2],

	[31, 3.1+increment, 5],
	[31.5, 3.25+increment, 4.7],
	[31.5, 4.25, 4.7],

	[31.5, 4.25, 4.7],
	[31, 4.1, 5],
	[31, 3.1+increment, 5],

	[31.5, 3.25+increment, 4.7],
	[32, 3.4+increment, 4.5],
	[32, 4.4, 4.5],

	[32, 4.4, 4.5],
	[31.5, 4.25, 4.7],
	[31.5, 3.25+increment, 4.7],

	[32, 3.4+increment, 4.5],
	[32.5, 3.55+increment, 4],
	[32.5, 4.55, 4],

	[32.5, 4.55, 4],
	[32, 4.4, 4.5],
	[32, 3.4+increment, 4.5],

	[32.5, 3.55+increment, 4],
	[33, 3.7+increment, 3.5],
	[33, 4.7, 3.5],

	[33, 4.7, 3.5],
	[32.5, 4.55, 4],
	[32.5, 3.55+increment, 4],

	[33, 3.7+increment, 3.5],
	[33.5, 3.85+increment, 2.5],
	[33.5, 4.85, 2.5],

	[33.5, 4.85, 2.5],
	[33, 4.7, 3.5],
	[33, 3.7+increment, 3.5],

	[33.5, 3.85+increment, 2.5],
	[34, 4+increment, 0],
	[34, 5, 0],

	[34, 5, 0],
	[33.5, 4.85, 2.5],
	[33.5, 3.85+increment, 2.5]
];

var vertices = new Float32Array( noseRightEdgePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < noseRightEdgePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = noseRightEdgePositions[i][0];
	vertices[ i*3 + 1 ] = noseRightEdgePositions[i][1];
	vertices[ i*3 + 2 ] = noseRightEdgePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
noseRightEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: green } );

var noseRightEdgeMesh = new THREE.Mesh( noseRightEdge, material );
bottomNoseMesh.material.side = THREE.DoubleSide;
scene.add(noseRightEdgeMesh);


// tail right edge
var tailRightEdge = new THREE.BufferGeometry();

var tailRightEdgePositions = [
	[-24,1+increment,6],
	[-24.5,1.15+increment,6],
	[-24.5, 2.15, 6],

	[-24.5, 2.15, 6],
	[-24, 2, 6],
	[-24, 1+increment, 6],

	[-24.5, 1.15+increment, 6],
	[-25, 1.3+increment, 6],
	[-25, 2.3, 6],

	[-25, 2.3, 6],
	[-24.5, 2.15, 6],
	[-24.5, 1.15+increment, 6],

	[-25, 1.3+increment, 6],
	[-25.5, 1.45+increment, 6],
	[-25.5, 2.45, 6],

	[-25.5, 2.45, 6],
	[-25, 2.3, 6],
	[-25, 1.3+increment, 6],

	[-25.5, 1.45+increment, 6],
	[-26, 1.6+increment, 6],
	[-26, 2.6, 6],

	[-26, 2.6, 6],
	[-25.5, 2.45, 6],
	[-25.5, 1.45+increment, 6],

	[-26, 1.6+increment, 6],
	[-26.5, 1.75+increment, 6],
	[-26.5, 2.75, 6],

	[-26.5, 2.75, 6],
	[-26, 2.6, 6],
	[-26, 1.6+increment, 6],

	[-26.5, 1.75+increment, 6],
	[-27, 1.9+increment, 6],
	[-27, 2.9, 6],

	[-27, 2.9, 6],
	[-26.5, 2.75, 6],
	[-26.5, 1.75+increment, 6],

	[-27, 1.9+increment, 6],
	[-27.5, 2.05+increment, 5.9],
	[-27.5, 3.05, 5.9],

	[-27.5, 3.05, 5.9],
	[-27, 2.9, 6],
	[-27, 1.9+increment, 6],

	[-27.5, 2.05+increment, 5.9],
	[-28, 2.2+increment, 5.8],
	[-28, 3.2, 5.8],

	[-28, 3.2, 5.8],
	[-27.5, 3.05, 5.9],
	[-27.5, 2.05+increment, 5.9],

	[-28, 2.2+increment, 5.8],
	[-28.5, 2.35+increment, 5.7],
	[-28.5, 3.35, 5.7],

	[-28.5, 3.35, 5.7],
	[-28, 3.2, 5.8],
	[-28, 2.2+increment, 5.8],

	[-28.5, 2.35+increment, 5.7],
	[-29, 2.5+increment, 5.6],
	[-29, 3.5, 5.6],

	[-29, 3.5, 5.6],
	[-28.5, 3.35, 5.7],
	[-28.5, 2.35+increment, 5.7],

	[-29, 2.5+increment, 5.6],
	[-29.5, 2.65+increment, 5.5],
	[-29.5, 3.65, 5.5],

	[-29.5, 3.65, 5.5],
	[-29, 3.5, 5.6],
	[-29, 2.5+increment, 5.6],

	[-29.5, 2.65+increment, 5.5],
	[-30, 2.8+increment, 5.4],
	[-30, 3.8, 5.4],

	[-30, 3.8, 5.4],
	[-29.5, 3.65, 5.5],
	[-29.5, 2.65+increment, 5.5],

	[-30, 2.8+increment, 5.4],
	[-30.5, 2.95+increment, 5.2],
	[-30.5, 3.95, 5.2],

	[-30.5, 3.95, 5.2],
	[-30, 3.8, 5.4],
	[-30, 2.8+increment, 5.4],

	[-30.5, 2.95+increment, 5.2],
	[-31, 3.1+increment, 5],
	[-31, 4.1, 5],

	[-31, 4.1, 5],
	[-30.5, 3.95, 5.2],
	[-30.5, 2.95+increment, 5.2],

	[-31, 3.1+increment, 5],
	[-31.5, 3.25+increment, 4.7],
	[-31.5, 4.25, 4.7],

	[-31.5, 4.25, 4.7],
	[-31, 4.1, 5],
	[-31, 3.1+increment, 5],

	[-31.5, 3.25+increment, 4.7],
	[-32, 3.4+increment, 4.5],
	[-32, 4.4, 4.5],

	[-32, 4.4, 4.5],
	[-31.5, 4.25, 4.7],
	[-31.5, 3.25+increment, 4.7],

	[-32, 3.4+increment, 4.5],
	[-32.5, 3.55+increment, 4],
	[-32.5, 4.55, 4],

	[-32.5, 4.55, 4],
	[-32, 4.4, 4.5],
	[-32, 3.4+increment, 4.5],

	[-32.5, 3.55+increment, 4],
	[-33, 3.7+increment, 3.5],
	[-33, 4.7, 3.5],

	[-33, 4.7, 3.5],
	[-32.5, 4.55, 4],
	[-32.5, 3.55+increment, 4],

	[-33, 3.7+increment, 3.5],
	[-33.5, 3.85+increment, 2.5],
	[-33.5, 4.85, 2.5],

	[-33.5, 4.85, 2.5],
	[-33, 4.7, 3.5],
	[-33, 3.7+increment, 3.5],

	[-33.5, 3.85+increment, 2.5],
	[-34, 4+increment, 0],
	[-34, 5, 0],

	[-34, 5, 0],
	[-33.5, 4.85, 2.5],
	[-33.5, 3.85+increment, 2.5]
];

var vertices = new Float32Array( tailRightEdgePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < tailRightEdgePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = tailRightEdgePositions[i][0];
	vertices[ i*3 + 1 ] = tailRightEdgePositions[i][1];
	vertices[ i*3 + 2 ] = tailRightEdgePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
tailRightEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: green } );

var tailRightEdgeMesh = new THREE.Mesh( tailRightEdge, material );
tailRightEdgeMesh.material.side = THREE.DoubleSide;
scene.add(tailRightEdgeMesh);

// top tail  ----------------------------------------------------------------
var tailTop = new THREE.BufferGeometry();

var tailTopPositions = [ 
	[-24, 2,  6],
	[ -24.5, 2.15,  6],
	[ -24.5, 2.15,  -6],

	[ -24.5,  2.15,  -6],
	[ -24,  2,  -6],
	[ -24,  2,  6],

	[-24.5, 2.15,  6],
	[ -25, 2.30,  6],
	[ -25,  2.30,  -6],

	[ -25,  2.30,  -6],
	[ -24.5, 2.15,  -6],
	[ -24.5,  2.15,  6],

	[-25, 2.30,  6],
	[ -25.5, 2.45,  6],
	[ -25.5,  2.45,  -6],

	[ -25.5,  2.45,  -6],
	[ -25,  2.30,  -6],
	[ -25,  2.30,  6],

	[-25.5, 2.45,  6],
	[ -26, 2.60,  6],
	[ -26,  2.60,  -6],

	[ -26,  2.60,  -6],
	[ -25.5,  2.45,  -6],
	[ -25.5,  2.45,  6],


	[-26, 2.60,  6],
	[ -26.5, 2.75,  6],
	[ -26.5,  2.75,  -6],

	[ -26.5,  2.75,  -6],
	[ -26,  2.60,  -6],
	[ -26,  2.60,  6],

	[-26.5, 2.75,  6],
	[ -27, 2.90,  6],
	[ -27,  2.90,  -6],

	[ -27,  2.90,  -6],
	[ -26.5,  2.75,  -6],
	[ -26.5,  2.75,  6],



	[ -27, 2.90,  6],
	[-27.5, 3.05, 5.9],
	[-27.5, 3.05, -5.9],

	[-27.5, 3.05, -5.9],
	[-27, 2.90, -6],
	[-27, 2.90, 6],

	[-27.5, 3.05, 5.9],
	[-28, 3.20, 5.8],
	[-28, 3.20, -5.8],

	[-28, 3.20, -5.8],
	[-27.5, 3.05, -5.9],
	[-27.5, 3.05, 5.9],

	[-28, 3.20, 5.8],
	[-28.5, 3.35, 5.7],
	[-28.5, 3.35, -5.7],

	[-28.5, 3.35, -5.7],
	[-28, 3.20, -5.8],
	[-28, 3.20, 5.8],

	[-28.5, 3.35, 5.7],
	[-29, 3.50, 5.6],
	[-29, 3.50, -5.6],

	[-29, 3.50, -5.6],
	[-28.5, 3.35, -5.7],
	[-28.5, 3.35, 5.7],

	[-29, 3.50, 5.6],
	[-29.5, 3.65, 5.5],
	[-29.5, 3.65, -5.5],

	[-29.5, 3.65, -5.5],
	[-29, 3.50, -5.6],
	[-29, 3.50, 5.6],

	[-29.5, 3.65, 5.5],
	[-30, 3.80, 5.4],
	[-30, 3.80, -5.4],

	[-30, 3.80, -5.4],
	[-29.5, 3.65, -5.5],
	[-29.5, 3.65, 5.5],

	[-30, 3.80, 5.4],
	[-30.5, 3.95, 5.2],
	[-30.5, 3.95, -5.2],

	[-30.5, 3.95, -5.2],
	[-30, 3.80, -5.4],
	[-30, 3.80, 5.4],

	[-30.5, 3.95, 5.2],
	[-31, 4.1, 5],
	[-31, 4.1, -5],

	[-31, 4.1, -5],
	[-30.5, 3.95, -5.2],
	[-30.5, 3.95, 5.2],

	[-31, 4.1, 5],
	[-31.5,4.25, 4.7],
	[-31.5, 4.25, -4.7],

	[-31.5, 4.25, -4.7],
	[-31, 4.1, -5],
	[-31, 4.1, 5],

	[-31.5, 4.25, 4.7],
	[-32, 4.40, 4.5],
	[-32, 4.40, -4.5],

	[-32, 4.40, -4.5],
	[-31.5, 4.25, -4.7],
	[-31.5, 4.25, 4.7],

	[-32, 4.40, 4.5],
	[-32.5, 4.55, 4],
	[-32.5, 4.55, -4],

	[-32.5, 4.55, -4],
	[-32, 4.40, -4.5],
	[-32, 4.40, 4.5],

	[-32.5, 4.55, 4],
	[-33, 4.70, 3.5],
	[-33, 4.70, -3.5],

	[-33, 4.70, -3.5],
	[-32.5, 4.55, -4],
	[-32.5, 4.55, 4],

	[-33, 4.70, 3.5],
	[-33.5, 4.85, 2.5],
	[-33.5, 4.85, -2.5],

	[-33.5, 4.85, -2.5],
	[-33, 4.70, -3.5],
	[-33, 4.70, 3.5],

	[-33.5, 4.85, 2.5],
	[-34, 5, 0],
	[-33.5, 4.85, -2.5]
];

var vertices = new Float32Array( tailTopPositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < tailTopPositions.length; i++ )
{
	vertices[ i*3 + 0 ] = tailTopPositions[i][0];
	vertices[ i*3 + 1 ] = tailTopPositions[i][1];
	vertices[ i*3 + 2 ] = tailTopPositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
tailTop.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: black } );
var topTailMesh = new THREE.Mesh( tailTop, material );
topTailMesh.material.side = THREE.DoubleSide;
scene.add(topTailMesh);

// ----------------------------------------------------


// bottom nose ----------------------------------------------------------------
var tailBottom = new THREE.BufferGeometry();

var tailBottomPositions = [ 
	[-24, 1+increment,  6],
	[ -24.5, 1.15+increment,  6],
	[ -24.5, 1.15+increment,  -6],

	[-24.5,  1.15+increment,  -6],
	[ -24,  1+increment,  -6],
	[ -24,  1+increment,  6],

	[-24.5, 1.15+increment,  6],
	[ -25, 1.30+increment,  6],
	[ -25,  1.30+increment,  -6],

	[ -25,  1.30+increment,  -6],
	[ -24.5, 1.15+increment,  -6],
	[ -24.5,  1.15+increment,  6],

	[-25, 1.30+increment,  6],
	[ -25.5, 1.45+increment,  6],
	[ -25.5,  1.45+increment,  -6],

	[ -25.5,  1.45+increment,  -6],
	[ -25,  1.30+increment,  -6],
	[ -25,  1.30+increment,  6],

	[-25.5, 1.45+increment,  6],
	[ -26, 1.60+increment,  6],
	[ -26,  1.60+increment,  -6],

	[ -26,  1.60+increment,  -6],
	[ -25.5,  1.45+increment,  -6],
	[ -25.5,  1.45+increment,  6],


	[-26, 1.60+increment,  6],
	[ -26.5, 1.75+increment,  6],
	[ -26.5,  1.75+increment,  -6],

	[ -26.5,  1.75+increment,  -6],
	[ -26,  1.60+increment,  -6],
	[ -26,  1.60+increment,  6],

	[-26.5, 1.75+increment,  6],
	[ -27, 1.90+increment,  6],
	[ -27,  1.90+increment,  -6],

	[ -27,  1.90+increment,  -6],
	[ -26.5,  1.75+increment,  -6],
	[ -26.5,  1.75+increment,  6],



	[ -27, 1.90+increment,  6],
	[-27.5, 2.05+increment, 5.9],
	[-27.5, 2.05+increment, -5.9],

	[-27.5, 2.05+increment, -5.9],
	[-27, 1.90+increment, -6],
	[-27, 1.90+increment, 6],

	[-27.5, 2.05+increment, 5.9],
	[-28, 2.20+increment, 5.8],
	[-28, 2.20+increment, -5.8],

	[-28, 2.20+increment, -5.8],
	[-27.5, 2.05+increment, -5.9],
	[-27.5, 2.05+increment, 5.9],

	[-28, 2.20+increment, 5.8],
	[-28.5, 2.35+increment, 5.7],
	[-28.5, 2.35+increment, -5.7],

	[-28.5, 2.35+increment, -5.7],
	[-28, 2.20+increment, -5.8],
	[-28, 2.20+increment, 5.8],

	[-28.5, 2.35+increment, 5.7],
	[-29, 2.50+increment, 5.6],
	[-29, 2.50+increment, -5.6],

	[-29, 2.50+increment, -5.6],
	[-28.5, 2.35+increment, -5.7],
	[-28.5, 2.35+increment, 5.7],

	[-29, 2.50+increment, 5.6],
	[-29.5, 2.65+increment, 5.5],
	[-29.5, 2.65+increment, -5.5],

	[-29.5, 2.65+increment, -5.5],
	[-29, 2.50+increment, -5.6],
	[-29, 2.50+increment, 5.6],

	[-29.5, 2.65+increment, 5.5],
	[-30, 2.80+increment, 5.4],
	[-30, 2.80+increment, -5.4],

	[-30, 2.80+increment, -5.4],
	[-29.5, 2.65+increment, -5.5],
	[-29.5, 2.65+increment, 5.5],

	[-30, 2.80+increment, 5.4],
	[-30.5, 2.95+increment, 5.2],
	[-30.5, 2.95+increment, -5.2],

	[-30.5, 2.95+increment, -5.2],
	[-30, 2.80+increment, -5.4],
	[-30, 2.80+increment, 5.4],

	[-30.5, 2.95+increment, 5.2],
	[-31, 3.1+increment, 5],
	[-31, 3.1+increment, -5],

	[-31, 3.1+increment, -5],
	[-30.5, 2.95+increment, -5.2],
	[-30.5, 2.95+increment, 5.2],

	[-31, 3.1+increment, 5],
	[-31.5,3.25+increment, 4.7],
	[-31.5, 3.25+increment, -4.7],

	[-31.5, 3.25+increment, -4.7],
	[-31, 3.1+increment, -5],
	[-31, 3.1+increment, 5],

	[-31.5, 3.25+increment, 4.7],
	[-32, 3.40+increment, 4.5],
	[-32, 3.40+increment, -4.5],

	[-32, 3.40+increment, -4.5],
	[-31.5, 3.25+increment, -4.7],
	[-31.5, 3.25+increment, 4.7],

	[-32, 3.40+increment, 4.5],
	[-32.5, 3.55+increment, 4],
	[-32.5, 3.55+increment, -4],

	[-32.5, 3.55+increment, -4],
	[-32, 3.40+increment, -4.5],
	[-32, 3.40+increment, 4.5],

	[-32.5, 3.55+increment, 4],
	[-33, 3.70+increment, 3.5],
	[-33, 3.70+increment, -3.5],

	[-33, 3.70+increment, -3.5],
	[-32.5, 3.55+increment, -4],
	[-32.5, 3.55+increment, 4],

	[-33, 3.70+increment, 3.5],
	[-33.5, 3.85+increment, 2.5],
	[-33.5, 3.85+increment, -2.5],

	[-33.5, 3.85+increment, -2.5],
	[-33, 3.70+increment, -3.5],
	[-33, 3.70+increment, 3.5],

	[-33.5, 3.85+increment, 2.5],
	[-34, 4+increment, 0],
	[-33.5, 3.85+increment, -2.5]
];

var vertices = new Float32Array( tailBottomPositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < tailBottomPositions.length; i++ )
{
	vertices[ i*3 + 0 ] = tailBottomPositions[i][0];
	vertices[ i*3 + 1 ] = tailBottomPositions[i][1];
	vertices[ i*3 + 2 ] = tailBottomPositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
tailBottom.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: black } );

var bottomTailMesh = new THREE.Mesh( tailBottom, material );
bottomTailMesh.material.side = THREE.DoubleSide;
scene.add(bottomTailMesh);

// --------------------------------------------------------------------
// nose right edge
var noseLeftEdge = new THREE.BufferGeometry();

var noseLeftEdgePositions = [
	[24,1+increment,-6],
	[24.5,1.15+increment,-6],
	[24.5, 2.15, -6],

	[24.5, 2.15, -6],
	[24, 2, -6],
	[24, 1+increment, -6],

	[24.5, 1.15+increment, -6],
	[25, 1.3+increment, -6],
	[25, 2.3, -6],

	[25, 2.3, -6],
	[24.5, 2.15, -6],
	[24.5, 1.15+increment, -6],

	[25, 1.3+increment, -6],
	[25.5, 1.45+increment, -6],
	[25.5, 2.45, -6],

	[25.5, 2.45, -6],
	[25, 2.3, -6],
	[25, 1.3+increment, -6],

	[25.5, 1.45+increment, -6],
	[26, 1.6+increment, -6],
	[26, 2.6, -6],

	[26, 2.6, -6],
	[25.5, 2.45, -6],
	[25.5, 1.45+increment, -6],

	[26, 1.6+increment, -6],
	[26.5, 1.75+increment, -6],
	[26.5, 2.75, -6],

	[26.5, 2.75, -6],
	[26, 2.6, -6],
	[26, 1.6+increment, -6],

	[26.5, 1.75+increment, -6],
	[27, 1.9+increment, -6],
	[27, 2.9, -6],

	[27, 2.9, -6],
	[26.5, 2.75, -6],
	[26.5, 1.75+increment, -6],

	[27, 1.9+increment, -6],
	[27.5, 2.05+increment, -5.9],
	[27.5, 3.05, -5.9],

	[27.5, 3.05, -5.9],
	[27, 2.9, -6],
	[27, 1.9+increment, -6],

	[27.5, 2.05+increment, -5.9],
	[28, 2.2+increment, -5.8],
	[28, 3.2, -5.8],

	[28, 3.2, -5.8],
	[27.5, 3.05, -5.9],
	[27.5, 2.05+increment, -5.9],

	[28, 2.2+increment, -5.8],
	[28.5, 2.35+increment, -5.7],
	[28.5, 3.35, -5.7],

	[28.5, 3.35, -5.7],
	[28, 3.2, -5.8],
	[28, 2.2+increment, -5.8],

	[28.5, 2.35+increment, -5.7],
	[29, 2.5+increment, -5.6],
	[29, 3.5, -5.6],

	[29, 3.5, -5.6],
	[28.5, 3.35, -5.7],
	[28.5, 2.35+increment, -5.7],

	[29, 2.5+increment, -5.6],
	[29.5, 2.65+increment, -5.5],
	[29.5, 3.65, -5.5],

	[29.5, 3.65, -5.5],
	[29, 3.5, -5.6],
	[29, 2.5+increment, -5.6],

	[29.5, 2.65+increment, -5.5],
	[30, 2.8+increment, -5.4],
	[30, 3.8, -5.4],

	[30, 3.8, -5.4],
	[29.5, 3.65, -5.5],
	[29.5, 2.65+increment, -5.5],

	[30, 2.8+increment, -5.4],
	[30.5, 2.95+increment, -5.2],
	[30.5, 3.95, -5.2],

	[30.5, 3.95, -5.2],
	[30, 3.8, -5.4],
	[30, 2.8+increment, -5.4],

	[30.5, 2.95+increment, -5.2],
	[31, 3.1+increment, -5],
	[31, 4.1, -5],

	[31, 4.1, -5],
	[30.5, 3.95, -5.2],
	[30.5, 2.95+increment, -5.2],

	[31, 3.1+increment, -5],
	[31.5, 3.25+increment, -4.7],
	[31.5, 4.25, -4.7],

	[31.5, 4.25, -4.7],
	[31, 4.1, -5],
	[31, 3.1+increment, -5],

	[31.5, 3.25+increment, -4.7],
	[32, 3.4+increment, -4.5],
	[32, 4.4, -4.5],

	[32, 4.4, -4.5],
	[31.5, 4.25, -4.7],
	[31.5, 3.25+increment, -4.7],

	[32, 3.4+increment, -4.5],
	[32.5, 3.55+increment, -4],
	[32.5, 4.55, -4],

	[32.5, 4.55, -4],
	[32, 4.4, -4.5],
	[32, 3.4+increment, -4.5],

	[32.5, 3.55+increment, -4],
	[33, 3.7+increment, -3.5],
	[33, 4.7, -3.5],

	[33, 4.7, -3.5],
	[32.5, 4.55, -4],
	[32.5, 3.55+increment, -4],

	[33, 3.7+increment, -3.5],
	[33.5, 3.85+increment, -2.5],
	[33.5, 4.85, -2.5],

	[33.5, 4.85, -2.5],
	[33, 4.7, -3.5],
	[33, 3.7+increment, -3.5],

	[33.5, 3.85+increment, -2.5],
	[34, 4+increment, 0],
	[34, 5, 0],

	[34, 5, 0],
	[33.5, 4.85, -2.5],
	[33.5, 3.85+increment, -2.5]
];

var vertices = new Float32Array( noseLeftEdgePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < noseLeftEdgePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = noseLeftEdgePositions[i][0];
	vertices[ i*3 + 1 ] = noseLeftEdgePositions[i][1];
	vertices[ i*3 + 2 ] = noseLeftEdgePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
noseLeftEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: yellow } );

var noseLeftEdgeMesh = new THREE.Mesh( noseLeftEdge, material );
noseLeftEdgeMesh.material.side = THREE.DoubleSide;
scene.add(noseLeftEdgeMesh);

// -------------------------------------------------------------------------------------------


// --------------------------------------------------------------------
// tail right edge
var tailLeftEdge = new THREE.BufferGeometry();

var tailLeftEdgePositions = [
	[-24,1+increment,-6],
	[-24.5,1.15+increment,-6],
	[-24.5, 2.15, -6],

	[-24.5, 2.15, -6],
	[-24, 2, -6],
	[-24, 1+increment, -6],

	[-24.5, 1.15+increment, -6],
	[-25, 1.3+increment, -6],
	[-25, 2.3, -6],

	[-25, 2.3, -6],
	[-24.5, 2.15, -6],
	[-24.5, 1.15+increment, -6],

	[-25, 1.3+increment, -6],
	[-25.5, 1.45+increment, -6],
	[-25.5, 2.45, -6],

	[-25.5, 2.45, -6],
	[-25, 2.3, -6],
	[-25, 1.3+increment, -6],

	[-25.5, 1.45+increment, -6],
	[-26, 1.6+increment, -6],
	[-26, 2.6, -6],

	[-26, 2.6, -6],
	[-25.5, 2.45, -6],
	[-25.5, 1.45+increment, -6],

	[-26, 1.6+increment, -6],
	[-26.5, 1.75+increment, -6],
	[-26.5, 2.75, -6],

	[-26.5, 2.75, -6],
	[-26, 2.6, -6],
	[-26, 1.6+increment, -6],

	[-26.5, 1.75+increment, -6],
	[-27, 1.9+increment, -6],
	[-27, 2.9, -6],

	[-27, 2.9, -6],
	[-26.5, 2.75, -6],
	[-26.5, 1.75+increment, -6],

	[-27, 1.9+increment, -6],
	[-27.5, 2.05+increment, -5.9],
	[-27.5, 3.05, -5.9],

	[-27.5, 3.05, -5.9],
	[-27, 2.9, -6],
	[-27, 1.9+increment, -6],

	[-27.5, 2.05+increment, -5.9],
	[-28, 2.2+increment, -5.8],
	[-28, 3.2, -5.8],

	[-28, 3.2, -5.8],
	[-27.5, 3.05, -5.9],
	[-27.5, 2.05+increment, -5.9],

	[-28, 2.2+increment, -5.8],
	[-28.5, 2.35+increment, -5.7],
	[-28.5, 3.35, -5.7],

	[-28.5, 3.35, -5.7],
	[-28, 3.2, -5.8],
	[-28, 2.2+increment, -5.8],

	[-28.5, 2.35+increment, -5.7],
	[-29, 2.5+increment, -5.6],
	[-29, 3.5, -5.6],

	[-29, 3.5, -5.6],
	[-28.5, 3.35, -5.7],
	[-28.5, 2.35+increment, -5.7],

	[-29, 2.5+increment, -5.6],
	[-29.5, 2.65+increment, -5.5],
	[-29.5, 3.65, -5.5],

	[-29.5, 3.65, -5.5],
	[-29, 3.5, -5.6],
	[-29, 2.5+increment, -5.6],

	[-29.5, 2.65+increment, -5.5],
	[-30, 2.8+increment, -5.4],
	[-30, 3.8, -5.4],

	[-30, 3.8, -5.4],
	[-29.5, 3.65, -5.5],
	[-29.5, 2.65+increment, -5.5],

	[-30, 2.8+increment, -5.4],
	[-30.5, 2.95+increment, -5.2],
	[-30.5, 3.95, -5.2],

	[-30.5, 3.95, -5.2],
	[-30, 3.8, -5.4],
	[-30, 2.8+increment, -5.4],

	[-30.5, 2.95+increment, -5.2],
	[-31, 3.1+increment, -5],
	[-31, 4.1, -5],

	[-31, 4.1, -5],
	[-30.5, 3.95, -5.2],
	[-30.5, 2.95+increment, -5.2],

	[-31, 3.1+increment, -5],
	[-31.5, 3.25+increment, -4.7],
	[-31.5, 4.25, -4.7],

	[-31.5, 4.25, -4.7],
	[-31, 4.1, -5],
	[-31, 3.1+increment, -5],

	[-31.5, 3.25+increment, -4.7],
	[-32, 3.4+increment, -4.5],
	[-32, 4.4, -4.5],

	[-32, 4.4, -4.5],
	[-31.5, 4.25, -4.7],
	[-31.5, 3.25+increment, -4.7],

	[-32, 3.4+increment, -4.5],
	[-32.5, 3.55+increment, -4],
	[-32.5, 4.55, -4],

	[-32.5, 4.55, -4],
	[-32, 4.4, -4.5],
	[-32, 3.4+increment, -4.5],

	[-32.5, 3.55+increment, -4],
	[-33, 3.7+increment, -3.5],
	[-33, 4.7, -3.5],

	[-33, 4.7, -3.5],
	[-32.5, 4.55, -4],
	[-32.5, 3.55+increment, -4],

	[-33, 3.7+increment, -3.5],
	[-33.5, 3.85+increment, -2.5],
	[-33.5, 4.85, -2.5],

	[-33.5, 4.85, -2.5],
	[-33, 4.7, -3.5],
	[-33, 3.7+increment, -3.5],

	[-33.5, 3.85+increment, -2.5],
	[-34, 4+increment, 0],
	[-34, 5, 0],

	[-34, 5, 0],
	[-33.5, 4.85, -2.5],
	[-33.5, 3.85+increment, -2.5]
];

var vertices = new Float32Array( tailLeftEdgePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < tailLeftEdgePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = tailLeftEdgePositions[i][0];
	vertices[ i*3 + 1 ] = tailLeftEdgePositions[i][1];
	vertices[ i*3 + 2 ] = tailLeftEdgePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
tailLeftEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: yellow } );

var tailLeftEdgeMesh = new THREE.Mesh( tailLeftEdge, material );
tailLeftEdgeMesh.material.side = THREE.DoubleSide;
scene.add(tailLeftEdgeMesh);

// -------------------------------------------------------------------------------------------

// right edge top line. Start from left
var rightTopLine = new THREE.BufferGeometry();

var rightTopLinePositions = [
	[-34, 5, 0],
	[-33.5, 4.85, 2.5],
	[-33, 4.7, 3.5], 

	[-32.5, 4.55, 4],
	[-32, 4.4, 4.5],
	[-31.5, 4.25, 4.7],
	
	[-31, 4.1, 5],
	[-30, 3.8, 5.4],
	[-29.5, 3.65, 5.5],

	[-29, 3.50, 5.6],
	[-28.5, 3.35, 5.7],
	[-28, 3.2, 5.8],

	[-27.5, 3.05, 5.9],
	[-27, 2.9, 6],
	[-26.5, 2.75, 6],

	[-26, 2.6, 6],
	[-25.5, 2.45, 6],
	[-25, 2.30, 6],

	[-24.5, 2.15, 6],
	[-24, 2, 6],
	[24, 2, 6],

	[24.5, 2.15, 6],
	[25, 2.3, 6],
	[25.5, 2.45, 6],

	[26, 2.6, 6],
	[26.5, 2.75, 6],
	[27, 2.9, 6],

	[27.5, 3.05, 5.9],
	[28, 3.2, 5.8],
	[28.5, 3.35, 5.7],

	[29, 3.5, 5.6],
	[29.5, 3.65, 5.5],
	[30, 3.8, 5.4],

	[31, 4.1, 5],
	[31.5, 4.25, 4.7],
	[32, 4.4, 4.5],

	[32.5, 4.55, 4],
	[33, 4.7, 3.5],
	[33.5, 4.85, 2.5],
	[34, 5, 0]
]

var vertices = new Float32Array( rightTopLinePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < rightTopLinePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = rightTopLinePositions[i][0];
	vertices[ i*3 + 1 ] = rightTopLinePositions[i][1];
	vertices[ i*3 + 2 ] = rightTopLinePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
rightTopLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.LineBasicMaterial( { color: yellow, linewidth: 2, } );

var rightTopLineMesh = new THREE.Line( rightTopLine, material );

scene.add(rightTopLineMesh);


// --------------------------------------------------------------------------------------------

// right edge bottom line. Start from left
var rightBottomLine = new THREE.BufferGeometry();

var rightBottomLinePositions = [
	[-34, 4+increment, 0],
	[-33.5, 3.85+increment, 2.5],
	[-33, 3.7+increment, 3.5], 

	[-32.5, 3.55+increment, 4],
	[-32, 3.4+increment, 4.5],
	[-31.5, 3.25+increment, 4.7],
	
	[-31, 3.1+increment, 5],
	[-30, 2.8+increment, 5.4],
	[-29.5, 2.65+increment, 5.5],

	[-29, 2.50+increment, 5.6],
	[-28.5, 2.35+increment, 5.7],
	[-28, 2.2+increment, 5.8],

	[-27.5, 2.05+increment, 5.9],
	[-27, 1.9+increment, 6],
	[-26.5, 1.75+increment, 6],

	[-26, 1.6+increment, 6],
	[-25.5, 1.45+increment, 6],
	[-25, 1.30+increment, 6],

	[-24.5, 1.15+increment, 6],
	[-24, 1+increment, 6],
	[24, 1+increment, 6],

	[24.5, 1.15+increment, 6],
	[25, 1.3+increment, 6],
	[25.5, 1.45+increment, 6],

	[26, 1.6+increment, 6],
	[26.5, 1.75+increment, 6],
	[27, 1.9+increment, 6],

	[27.5, 2.05+increment, 5.9],
	[28, 2.2+increment, 5.8],
	[28.5, 2.35+increment, 5.7],

	[29, 2.5+increment, 5.6],
	[29.5, 2.65+increment, 5.5],
	[30, 2.8+increment, 5.4],

	[31, 3.1+increment, 5],
	[31.5, 3.25+increment, 4.7],
	[32, 3.4+increment, 4.5],

	[32.5, 3.55+increment, 4],
	[33, 3.7+increment, 3.5],
	[33.5, 3.85+increment, 2.5],
	[34, 4+increment, 0]
]

var vertices = new Float32Array( rightBottomLinePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < rightBottomLinePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = rightBottomLinePositions[i][0];
	vertices[ i*3 + 1 ] = rightBottomLinePositions[i][1];
	vertices[ i*3 + 2 ] = rightBottomLinePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
rightBottomLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.LineBasicMaterial( { color: yellow, linewidth: 2, } );

var rightBottomLineMesh = new THREE.Line( rightBottomLine, material );

scene.add(rightBottomLineMesh);


// --------------------------------------------------------------------------------------------


// right edge top line. Start from left
var leftTopLine = new THREE.BufferGeometry();

var leftTopLinePositions = [
	[-34, 5, 0],
	[-33.5, 4.85, -2.5],
	[-33, 4.7, -3.5], 

	[-32.5, 4.55, -4],
	[-32, 4.4, -4.5],
	[-31.5, 4.25, -4.7],
	
	[-31, 4.1, -5],
	[-30, 3.8, -5.4],
	[-29.5, 3.65, -5.5],

	[-29, 3.50, -5.6],
	[-28.5, 3.35, -5.7],
	[-28, 3.2, -5.8],

	[-27.5, 3.05, -5.9],
	[-27, 2.9, -6],
	[-26.5, 2.75, -6],

	[-26, 2.6, -6],
	[-25.5, 2.45, -6],
	[-25, 2.30, -6],

	[-24.5, 2.15, -6],
	[-24, 2, -6],
	[24, 2, -6],

	[24.5, 2.15, -6],
	[25, 2.3, -6],
	[25.5, 2.45, -6],

	[26, 2.6, -6],
	[26.5, 2.75, -6],
	[27, 2.9, -6],

	[27.5, 3.05, -5.9],
	[28, 3.2, -5.8],
	[28.5, 3.35, -5.7],

	[29, 3.5, -5.6],
	[29.5, 3.65, -5.5],
	[30, 3.8, -5.4],

	[31, 4.1, -5],
	[31.5, 4.25, -4.7],
	[32, 4.4, -4.5],

	[32.5, 4.55, -4],
	[33, 4.7, -3.5],
	[33.5, 4.85, -2.5],
	[34, 5, 0]
]

var vertices = new Float32Array( leftTopLinePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < leftTopLinePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = leftTopLinePositions[i][0];
	vertices[ i*3 + 1 ] = leftTopLinePositions[i][1];
	vertices[ i*3 + 2 ] = leftTopLinePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
leftTopLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.LineBasicMaterial( { color: yellow, linewidth: 2, } );

var leftTopLinePositions = new THREE.Line( leftTopLine, material );

scene.add(leftTopLinePositions);

// -----------------------------------------------------------------------------------------------------


// right edge bottom line. Start from left
var leftBottomLine = new THREE.BufferGeometry();

var leftBottomLinePositions = [
	[-34, 4+increment, 0],
	[-33.5, 3.85+increment, -2.5],
	[-33, 3.7+increment, -3.5], 

	[-32.5, 3.55+increment, -4],
	[-32, 3.4+increment, -4.5],
	[-31.5, 3.25+increment, -4.7],
	
	[-31, 3.1+increment, -5],
	[-30, 2.8+increment, -5.4],
	[-29.5, 2.65+increment, -5.5],

	[-29, 2.50+increment, -5.6],
	[-28.5, 2.35+increment, -5.7],
	[-28, 2.2+increment, -5.8],

	[-27.5, 2.05+increment, -5.9],
	[-27, 1.9+increment, -6],
	[-26.5, 1.75+increment, -6],

	[-26, 1.6+increment, -6],
	[-25.5, 1.45+increment, -6],
	[-25, 1.30+increment, -6],

	[-24.5, 1.15+increment, -6],
	[-24, 1+increment, -6],
	[24, 1+increment, -6],

	[24.5, 1.15+increment, -6],
	[25, 1.3+increment, -6],
	[25.5, 1.45+increment, -6],

	[26, 1.6+increment, -6],
	[26.5, 1.75+increment, -6],
	[27, 1.9+increment, -6],

	[27.5, 2.05+increment, -5.9],
	[28, 2.2+increment, -5.8],
	[28.5, 2.35+increment, -5.7],

	[29, 2.5+increment, -5.6],
	[29.5, 2.65+increment, -5.5],
	[30, 2.8+increment, -5.4],

	[31, 3.1+increment, -5],
	[31.5, 3.25+increment, -4.7],
	[32, 3.4+increment, -4.5],

	[32.5, 3.55+increment, -4],
	[33, 3.7+increment, -3.5],
	[33.5, 3.85+increment, -2.5],
	[34, 4+increment, 0]
];

var vertices = new Float32Array( leftBottomLinePositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < leftBottomLinePositions.length; i++ )
{
	vertices[ i*3 + 0 ] = leftBottomLinePositions[i][0];
	vertices[ i*3 + 1 ] = leftBottomLinePositions[i][1];
	vertices[ i*3 + 2 ] = leftBottomLinePositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
leftBottomLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.LineBasicMaterial( { color: red, linewidth: 2, } );

var leftBottomLinePositions = new THREE.Line( leftBottomLine, material );

scene.add(leftBottomLinePositions);


// --------------------------------------------------------------------------------------------
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