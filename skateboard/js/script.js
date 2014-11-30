// Setup environment
var camera, scene, renderer;
camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
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
	bottom.position.y = 0;
	bottom.rotation.x = Math.PI / 2;
	skateboard.add(bottom);
	
	// right edge
	var edgeGeometry = new THREE.PlaneGeometry( 48,2 );
	var green = new THREE.Color("rgb(0,255,0)");
	var rightEdgeMaterial = new THREE.MeshBasicMaterial(  {color: green}  );
	var rightEdge = new THREE.Mesh(edgeGeometry, rightEdgeMaterial);
	rightEdge.position.y = 1;
	rightEdge.position.z = 6;
	skateboard.add(rightEdge);

	// left edge
	var leftEdgeGeometry = new THREE.PlaneGeometry( 48,2 );
	var yellow = new THREE.Color("rgb(0,255,255)");
	var leftEdgeMaterial = new THREE.MeshBasicMaterial(  {color: yellow}  );
	var leftEdge = new THREE.Mesh(leftEdgeGeometry, leftEdgeMaterial);
	leftEdge.position.y = 1;
	leftEdge.position.z = -6;
	skateboard.add(leftEdge);
	leftEdge.rotation.x = Math.PI;

// nose top ---------------------------------------
var topNose = new THREE.Object3D();
material = new THREE.MeshBasicMaterial( { color: black ,side:THREE.DoubleSide } );
material2 = new THREE.MeshBasicMaterial( { color: black ,side:THREE.DoubleSide } );
//material =  new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } );
var geometry = new THREE.Geometry();

geometry.vertices.push(
	new THREE.Vector3( 24,  2, 6  ),
	new THREE.Vector3( 24.5, 2, 6 ),
	new THREE.Vector3(  24, 2, -6)
);
geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry.computeBoundingSphere();
mesh = new THREE.Mesh( geometry, material );
topNose.add(mesh);

var geometry2 = new THREE.Geometry();
geometry2.vertices.push(
	new THREE.Vector3( 24,  2, -6  ),
	new THREE.Vector3( 24.5, 2, -6 ),
	new THREE.Vector3(  24.5, 2, 6)
);
geometry2.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry2.computeBoundingSphere();
mesh2 = new THREE.Mesh( geometry2, material2 );
topNose.add(mesh2);

// ------------------------------------------------------
var geometry3 = new THREE.Geometry();
geometry3.vertices.push(
	new THREE.Vector3( 24.5,  2, 6  ),
	new THREE.Vector3( 25, 2, 6 ),
	new THREE.Vector3(  24.5, 2, -6)
);
geometry3.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry3.computeBoundingSphere();
mesh3 = new THREE.Mesh( geometry3, material );
topNose.add(mesh3);

var geometry4 = new THREE.Geometry();
geometry4.vertices.push(
	new THREE.Vector3( 24.5,  2, -6  ),
	new THREE.Vector3( 25, 2, -6 ),
	new THREE.Vector3(  25, 2, 6)
);
geometry4.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry4.computeBoundingSphere();
mesh4= new THREE.Mesh( geometry4, material2 );
topNose.add(mesh4);

// -----------------------------------------------------
   
// ------------------------------------------------------
var geometry5 = new THREE.Geometry();
geometry5.vertices.push(
	new THREE.Vector3( 25,  2, 6  ),
	new THREE.Vector3( 25.5, 2, 6 ),
	new THREE.Vector3(  25, 2, -6)
);
geometry5.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry5.computeBoundingSphere();
mesh5 = new THREE.Mesh( geometry5, material );
topNose.add(mesh5);

var geometry6 = new THREE.Geometry();
geometry6.vertices.push(
	new THREE.Vector3( 25,  2, -6  ),
	new THREE.Vector3( 25.5, 2, -6 ),
	new THREE.Vector3(  25.5, 2, 6)
);
geometry6.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry6.computeBoundingSphere();
mesh6= new THREE.Mesh( geometry6, material2 );
topNose.add(mesh6);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry5 = new THREE.Geometry();
geometry5.vertices.push(
	new THREE.Vector3( 25.5,  2, 6  ),
	new THREE.Vector3( 26, 2, 6 ),
	new THREE.Vector3(  25.5, 2, -6)
);
geometry5.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry5.computeBoundingSphere();
mesh5 = new THREE.Mesh( geometry5, material );
topNose.add(mesh5);

var geometry6 = new THREE.Geometry();
geometry6.vertices.push(
	new THREE.Vector3( 25.5,  2, -6  ),
	new THREE.Vector3( 26, 2, -6 ),
	new THREE.Vector3(  26, 2, 6)
);
geometry6.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry6.computeBoundingSphere();
mesh6= new THREE.Mesh( geometry6, material2 );
topNose.add(mesh6);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry7 = new THREE.Geometry();
geometry7.vertices.push(
	new THREE.Vector3( 26,  2, 6  ),
	new THREE.Vector3( 26.5, 2, 6 ),
	new THREE.Vector3(  26, 2, -6)
);
geometry7.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry7.computeBoundingSphere();
mesh7 = new THREE.Mesh( geometry7, material );
topNose.add(mesh7);

var geometry8 = new THREE.Geometry();
geometry8.vertices.push(
	new THREE.Vector3( 26,  2, -6  ),
	new THREE.Vector3( 26.5, 2, -6 ),
	new THREE.Vector3(  26.5, 2, 6)
);
geometry8.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry8.computeBoundingSphere();
mesh8= new THREE.Mesh( geometry8, material2 );
topNose.add(mesh8);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry9 = new THREE.Geometry();
geometry9.vertices.push(
	new THREE.Vector3( 26.5,  2, 6  ),
	new THREE.Vector3( 27, 2, 6 ),
	new THREE.Vector3(  26.5, 2, -6)
);
geometry9.faces.push( new THREE.Face3( 0, 1,2 ) );
geometry9.computeBoundingSphere();
mesh9 = new THREE.Mesh( geometry9, material );
topNose.add(mesh9);


var geometry10 = new THREE.Geometry();
geometry10.vertices.push(
	new THREE.Vector3( 26.5,  2, -6  ),
	new THREE.Vector3( 27, 2, -6 ),
	new THREE.Vector3(  27, 2, 6)
);
geometry10.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry10.computeBoundingSphere();
mesh10 = new THREE.Mesh( geometry10, material2 );
topNose.add(mesh10);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry11 = new THREE.Geometry();
geometry11.vertices.push(
	new THREE.Vector3( 27,  2, 6  ),
	new THREE.Vector3( 27.5, 2, 5.9 ),
	new THREE.Vector3(  27, 2, -5.9)
);
geometry11.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry11.computeBoundingSphere();
mesh11 = new THREE.Mesh( geometry11, material );
topNose.add(mesh11);

var geometry12 = new THREE.Geometry();
geometry12.vertices.push(
	new THREE.Vector3( 27,  2, -6  ),
	new THREE.Vector3( 27.5, 2, -5.9 ),
	new THREE.Vector3(  27.5, 2, 5.9)
);
geometry12.faces.push( new THREE.Face3( 0, 1, 2) );
geometry12.computeBoundingSphere();
mesh12= new THREE.Mesh( geometry12, material2 );
topNose.add(mesh12);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry12 = new THREE.Geometry();
geometry12.vertices.push(
	new THREE.Vector3( 27.5,  2, 5.9  ),
	new THREE.Vector3( 28, 2, 5.8 ),
	new THREE.Vector3(  27.5, 2, -5.8)
);
geometry12.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry12.computeBoundingSphere();
mesh12 = new THREE.Mesh( geometry12, material );
topNose.add(mesh12);

var geometry13 = new THREE.Geometry();
geometry13.vertices.push(
	new THREE.Vector3( 27.5,  2, -5.9  ),
	new THREE.Vector3( 28, 2, -5.8 ),
	new THREE.Vector3(  28, 2, 5.8)
);
geometry13.faces.push( new THREE.Face3( 0, 1, 2) );
geometry12.computeBoundingSphere();
mesh13= new THREE.Mesh( geometry13, material2 );
topNose.add(mesh13);

// -----------------------------------------------------


// ------------------------------------------------------
var geometry14 = new THREE.Geometry();
geometry14.vertices.push(
	new THREE.Vector3( 28,  2, 5.8  ),
	new THREE.Vector3( 28.5, 2, 5.7 ),
	new THREE.Vector3(  28, 2, -5.7)
);
geometry14.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry14.computeBoundingSphere();
mesh14 = new THREE.Mesh( geometry14, material );
topNose.add(mesh14);

var geometry15 = new THREE.Geometry();
geometry15.vertices.push(
	new THREE.Vector3( 28,  2, -5.8  ),
	new THREE.Vector3( 28.5, 2, -5.7 ),
	new THREE.Vector3(  28.5, 2, 5.7)
);
geometry15.faces.push( new THREE.Face3( 0, 1, 2) );
geometry15.computeBoundingSphere();
mesh15= new THREE.Mesh( geometry15, material2 );
topNose.add(mesh15);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry16 = new THREE.Geometry();
geometry16.vertices.push(
	new THREE.Vector3( 28.5,  2, 5.7  ),
	new THREE.Vector3( 29, 2, 5.6 ),
	new THREE.Vector3(  28.5, 2, -5.6)
);
geometry16.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry16.computeBoundingSphere();
mesh16 = new THREE.Mesh( geometry16, material );
topNose.add(mesh16);

var geometry17 = new THREE.Geometry();
geometry17.vertices.push(
	new THREE.Vector3( 28.5,  2, -5.7  ),
	new THREE.Vector3( 29, 2, -5.6 ),
	new THREE.Vector3(  29, 2, 5.6)
);
geometry17.faces.push( new THREE.Face3( 0, 1, 2) );
geometry17.computeBoundingSphere();
mesh17 = new THREE.Mesh( geometry17, material2 );
topNose.add(mesh17);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry18 = new THREE.Geometry();
geometry18.vertices.push(
	new THREE.Vector3( 29,  2, 5.6  ),
	new THREE.Vector3( 29.5, 2, 5.5 ),
	new THREE.Vector3(  29, 2, -5.5)
);
geometry18.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry18.computeBoundingSphere();
mesh18 = new THREE.Mesh( geometry18, material );
topNose.add(mesh18);

var geometry19 = new THREE.Geometry();
geometry19.vertices.push(
	new THREE.Vector3( 29,  2, -5.6  ),
	new THREE.Vector3( 29.5, 2, -5.5 ),
	new THREE.Vector3(  29.5, 2, 5.5)
);
geometry19.faces.push( new THREE.Face3( 0, 1, 2) );
geometry19.computeBoundingSphere();
mesh19 = new THREE.Mesh( geometry19, material2 );
topNose.add(mesh19);

// -----------------------------------------------------


// ------------------------------------------------------
var geometry19 = new THREE.Geometry();
geometry19.vertices.push(
	new THREE.Vector3( 29.5,  2, 5.5  ),
	new THREE.Vector3( 30, 2, 5.4 ),
	new THREE.Vector3(  29.5, 2, -5.4)
);
geometry19.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry19.computeBoundingSphere();
mesh19 = new THREE.Mesh( geometry19, material );
topNose.add(mesh19);

var geometry20 = new THREE.Geometry();
geometry20.vertices.push(
	new THREE.Vector3( 29.5,  2, -5.5  ),
	new THREE.Vector3( 30, 2, -5.4 ),
	new THREE.Vector3(  30, 2, 5.4)
);
geometry20.faces.push( new THREE.Face3( 0, 1, 2) );
geometry20.computeBoundingSphere();
mesh20 = new THREE.Mesh( geometry20, material2 );
topNose.add(mesh20);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry21 = new THREE.Geometry();
geometry21.vertices.push(
	new THREE.Vector3( 30,  2, 5.4  ),
	new THREE.Vector3( 30.5, 2, 5.2 ),
	new THREE.Vector3(  30, 2, -5.2)
);
geometry21.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry21.computeBoundingSphere();
mesh21 = new THREE.Mesh( geometry21, material );
topNose.add(mesh21);

var geometry22 = new THREE.Geometry();
geometry22.vertices.push(
	new THREE.Vector3( 30,  2, -5.4  ),
	new THREE.Vector3( 30.5, 2, -5.2 ),
	new THREE.Vector3(  30.5, 2, 5.2)
);
geometry22.faces.push( new THREE.Face3( 0, 1, 2) );
geometry22.computeBoundingSphere();
mesh22 = new THREE.Mesh( geometry22, material2 );
topNose.add(mesh22);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry23 = new THREE.Geometry();
geometry23.vertices.push(
	new THREE.Vector3( 30.5,  2, 5.2  ),
	new THREE.Vector3( 31, 2, 5 ),
	new THREE.Vector3(  30.5, 2, -5)
);
geometry23.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry23.computeBoundingSphere();
mesh23 = new THREE.Mesh( geometry23, material );
topNose.add(mesh23);

var geometry24 = new THREE.Geometry();
geometry24.vertices.push(
	new THREE.Vector3( 30.5,  2, -5.2  ),
	new THREE.Vector3( 31, 2, -5 ),
	new THREE.Vector3(  31, 2, 5)
);
geometry24.faces.push( new THREE.Face3( 0, 1, 2) );
geometry24.computeBoundingSphere();
mesh24 = new THREE.Mesh( geometry24, material2 );
topNose.add(mesh24);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry24 = new THREE.Geometry();
geometry24.vertices.push(
	new THREE.Vector3( 31,  2, 5  ),
	new THREE.Vector3( 31.5, 2, 4.7 ),
	new THREE.Vector3(  31, 2, -4.7)
);
geometry24.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry24.computeBoundingSphere();
mesh24 = new THREE.Mesh( geometry24, material );
topNose.add(mesh24);

var geometry25 = new THREE.Geometry();
geometry25.vertices.push(
	new THREE.Vector3( 31,  2, -5  ),
	new THREE.Vector3( 31.5, 2, -4.7 ),
	new THREE.Vector3(  31.5, 2, 4.7)
);
geometry25.faces.push( new THREE.Face3( 0, 1, 2) );
geometry25.computeBoundingSphere();
mesh25 = new THREE.Mesh( geometry25, material2 );
topNose.add(mesh25);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry26 = new THREE.Geometry();
geometry26.vertices.push(
	new THREE.Vector3( 31.5,  2, 4.7  ),
	new THREE.Vector3( 32, 2, 4.5 ),
	new THREE.Vector3(  31.5, 2, -4.5)
);
geometry26.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry26.computeBoundingSphere();
mesh26 = new THREE.Mesh( geometry26, material );
topNose.add(mesh26);

var geometry27 = new THREE.Geometry();
geometry27.vertices.push(
	new THREE.Vector3( 31.5,  2, -4.7  ),
	new THREE.Vector3( 32, 2, -4.5 ),
	new THREE.Vector3(  32, 2, 4.5)
);
geometry27.faces.push( new THREE.Face3( 0, 1, 2) );
geometry27.computeBoundingSphere();
mesh27 = new THREE.Mesh( geometry27, material2 );
topNose.add(mesh27);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry27 = new THREE.Geometry();
geometry27.vertices.push(
	new THREE.Vector3( 32,  2, 4.5  ),
	new THREE.Vector3( 32.5, 2, 3.5 ),
	new THREE.Vector3(  32, 2, -3.5)
);
geometry27.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry27.computeBoundingSphere();
mesh27 = new THREE.Mesh( geometry27, material );
topNose.add(mesh27);

var geometry28 = new THREE.Geometry();
geometry28.vertices.push(
	new THREE.Vector3( 32,  2, -4.5  ),
	new THREE.Vector3( 32.5, 2, -3.5 ),
	new THREE.Vector3(  32.5, 2, 3.5)
);
geometry28.faces.push( new THREE.Face3( 0, 1, 2) );
geometry28.computeBoundingSphere();
mesh28 = new THREE.Mesh( geometry28, material2 );
topNose.add(mesh28);

// -----------------------------------------------------

// ------------------------------------------------------
var geometry29 = new THREE.Geometry();
geometry29.vertices.push(
	new THREE.Vector3( 32.5,  2, 3.5  ),
	new THREE.Vector3( 33, 2, 2.5 ),
	new THREE.Vector3(  32.5, 2, -2.5)
);
geometry29.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry29.computeBoundingSphere();
mesh29 = new THREE.Mesh( geometry29, material );
topNose.add(mesh29);

var geometry30 = new THREE.Geometry();
geometry30.vertices.push(
	new THREE.Vector3( 32.5,  2, -3.5  ),
	new THREE.Vector3( 33, 2, -2.5 ),
	new THREE.Vector3(  33, 2, 2.5)
);
geometry30.faces.push( new THREE.Face3( 0, 1, 2) );
geometry30.computeBoundingSphere();
mesh30 = new THREE.Mesh( geometry30, material2 );
topNose.add(mesh30);


var geometry = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle. 
var vertexPositions = [ 
	[-1.0, -1.0,  1.0],
	[ 1.0, -1.0,  1.0],
	[ 1.0,  1.0,  1.0],

	[ 1.0,  1.0,  1.0],
	[-1.0,  1.0,  1.0],
	[-1.0, -1.0,  1.0]
];
var vertices = new Float32Array( vertexPositions.length * 3 ); // three components per vertex

// components of the position vector for each vertex are stored
// contiguously in the buffer.
for ( var i = 0; i < vertexPositions.length; i++ )
{
	vertices[ i*3 + 0 ] = vertexPositions[i][0];
	vertices[ i*3 + 1 ] = vertexPositions[i][1];
	vertices[ i*3 + 2 ] = vertexPositions[i][2];
}

// itemSize = 3 because there are 3 values (components) per vertex
geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);
// -----------------------------------------------------

	skateboard.add(topNose);
	//scene.add(skateboard);


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