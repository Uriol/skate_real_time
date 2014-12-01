
// Setup environment
var camera, scene, renderer;
camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer();
// init_Visualization();
// animate();

//console.log(centerPosition);
var multiplier = 100;

function init_Visualization(){

	var centerX = centerPosition*-1;
	//var centerX = centerPosition;
	console.log('centerX' + centerPosition)
	var backgroundColor = new THREE.Color("rgb(20, 20, 20)");
	camera.position.set(0,120,140);
	camera.lookAt(scene.position);
	renderer.setClearColor( backgroundColor );
	renderer.setSize( window.innerWidth, window.innerHeight );
	$('#visualizationPage').append(renderer.domElement);

	controls = new THREE.OrbitControls( camera );

	var this_x_position;
	var this_y_position;
	var this_z_position;


	// Remove previous objects
	var obj, i;
	for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
	    obj = scene.children[ i ];
	    if ( obj !== camera) {
	        scene.remove(obj);
	    }
	}



	// nose top
	var noseTop = new THREE.BufferGeometry();
	var vertices = new Float32Array( noseTopPositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < noseTopPositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = noseTopPositions[i][0];
		vertices[ i*3 + 1 ] = noseTopPositions[i][1];
		vertices[ i*3 + 2 ] = noseTopPositions[i][2];
	}
	noseTop.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// NOSE BOTTOM
	var noseBottom = new THREE.BufferGeometry();
	var vertices = new Float32Array( noseBottomPositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < noseBottomPositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = noseBottomPositions[i][0];
		vertices[ i*3 + 1 ] = noseBottomPositions[i][1];
		vertices[ i*3 + 2 ] = noseBottomPositions[i][2];
	}
	noseBottom.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// NOSE RIGHT EDGE
	var noseRightEdge = new THREE.BufferGeometry();
	var vertices = new Float32Array( noseRightEdgePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < noseRightEdgePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = noseRightEdgePositions[i][0];
		vertices[ i*3 + 1 ] = noseRightEdgePositions[i][1];
		vertices[ i*3 + 2 ] = noseRightEdgePositions[i][2];
	}
	noseRightEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// NOSE LEFT EDGE
	var noseLeftEdge = new THREE.BufferGeometry();
	var vertices = new Float32Array( noseLeftEdgePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < noseLeftEdgePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = noseLeftEdgePositions[i][0];
		vertices[ i*3 + 1 ] = noseLeftEdgePositions[i][1];
		vertices[ i*3 + 2 ] = noseLeftEdgePositions[i][2];
	}
	noseLeftEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// TAIL TOP
	var tailTop = new THREE.BufferGeometry();
	var vertices = new Float32Array( tailTopPositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < tailTopPositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = tailTopPositions[i][0];
		vertices[ i*3 + 1 ] = tailTopPositions[i][1];
		vertices[ i*3 + 2 ] = tailTopPositions[i][2];
	}
	tailTop.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// TAIL BOTTOM
	var tailBottom = new THREE.BufferGeometry();
	var vertices = new Float32Array( tailBottomPositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < tailBottomPositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = tailBottomPositions[i][0];
		vertices[ i*3 + 1 ] = tailBottomPositions[i][1];
		vertices[ i*3 + 2 ] = tailBottomPositions[i][2];
	}
	tailBottom.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// TAIL RIGHT EDGE
	var tailRightEdge = new THREE.BufferGeometry();
	var vertices = new Float32Array( tailRightEdgePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < tailRightEdgePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = tailRightEdgePositions[i][0];
		vertices[ i*3 + 1 ] = tailRightEdgePositions[i][1];
		vertices[ i*3 + 2 ] = tailRightEdgePositions[i][2];
	}
	tailRightEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// TAIL LEFT EDGE
	var tailLeftEdge = new THREE.BufferGeometry();
	var vertices = new Float32Array( tailLeftEdgePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < tailLeftEdgePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = tailLeftEdgePositions[i][0];
		vertices[ i*3 + 1 ] = tailLeftEdgePositions[i][1];
		vertices[ i*3 + 2 ] = tailLeftEdgePositions[i][2];
	}
	tailLeftEdge.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// RIGHT TOP LINE
	var rightTopLine = new THREE.BufferGeometry();
	var vertices = new Float32Array( rightTopLinePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < rightTopLinePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = rightTopLinePositions[i][0];
		vertices[ i*3 + 1 ] = rightTopLinePositions[i][1];
		vertices[ i*3 + 2 ] = rightTopLinePositions[i][2];
	}
	rightTopLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// RIGHT BOTTOM LINE
	var rightBottomLine = new THREE.BufferGeometry();
	var vertices = new Float32Array( rightBottomLinePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < rightBottomLinePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = rightBottomLinePositions[i][0];
		vertices[ i*3 + 1 ] = rightBottomLinePositions[i][1];
		vertices[ i*3 + 2 ] = rightBottomLinePositions[i][2];
	}
	rightBottomLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// LEFT TOP LINE
	var leftTopLine = new THREE.BufferGeometry();
	var vertices = new Float32Array( leftTopLinePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < leftTopLinePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = leftTopLinePositions[i][0];
		vertices[ i*3 + 1 ] = leftTopLinePositions[i][1];
		vertices[ i*3 + 2 ] = leftTopLinePositions[i][2];
	}
	leftTopLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

	// LEFT BOTTOM LINE
	var leftBottomLine = new THREE.BufferGeometry();
	var vertices = new Float32Array( leftBottomLinePositions.length * 3 ); // three components per vertex
	for ( var i = 0; i < leftBottomLinePositions.length; i++ )
	{
		vertices[ i*3 + 0 ] = leftBottomLinePositions[i][0];
		vertices[ i*3 + 1 ] = leftBottomLinePositions[i][1];
		vertices[ i*3 + 2 ] = leftBottomLinePositions[i][2];
	}
	leftBottomLine.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );


	for ( var i = 0; i < $total_x_positions.length; i ++ ) {

		// colors
		var black = new THREE.Color("rgb(20,20,20)");

		var skateboard = new THREE.Object3D();

		this_x_position = $total_x_positions[i];
		this_y_position = $total_y_positions[i];
		this_z_position = $total_z_positions[i];


		var grey = new THREE.Color("rgb(40, 40, 40)");
		var green = new THREE.Color("rgb(184, 228, 20)");
		var blue = new THREE.Color("rgb(0, 200, 255)");

		if (this_z_position <= 0){
			var rightEdgeMaterial = new THREE.MeshBasicMaterial(  {color: grey}  );
			var leftEdgeMaterial = new THREE.MeshBasicMaterial(  {color: grey}  );
		}  else if(this_z_position > 0){
			var rightEdgeMaterial = new THREE.MeshBasicMaterial(  {color: green}  );
			var leftEdgeMaterial = new THREE.MeshBasicMaterial(  {color: blue}  );
		}


	// skateboard
	// top
	var topGeometry = new THREE.PlaneGeometry( 48,12 );
	// var black = new THREE.Color("rgb(0,0,0)");
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
	
	
	var rightEdge = new THREE.Mesh(edgeGeometry, rightEdgeMaterial);
	rightEdge.position.y = 1.75;
	rightEdge.position.z = 6;
	skateboard.add(rightEdge);

	// left edge
	var leftEdgeGeometry = new THREE.PlaneGeometry( 48,0.5 );
	
	
	var leftEdge = new THREE.Mesh(leftEdgeGeometry, leftEdgeMaterial);
	leftEdge.position.y = 1.75;
	leftEdge.position.z = -6;
	skateboard.add(leftEdge);
	leftEdge.rotation.x = Math.PI;

	var material = new THREE.MeshBasicMaterial( { color: black } );
	

	if (this_z_position <= 0){
		var greenMaterial =  new THREE.MeshBasicMaterial( { color: grey } );
		var blueMaterial = new THREE.MeshBasicMaterial( { color: grey } );
		var greenLineMaterial = new THREE.LineBasicMaterial( { color: grey, linewidth: 2, } );
		var blueLineMaterial =  new THREE.LineBasicMaterial( { color: grey, linewidth: 2, } );
	} else if(this_z_position > 0){
		var greenMaterial =  new THREE.MeshBasicMaterial( { color: green } );
		var blueMaterial = new THREE.MeshBasicMaterial( { color: blue } );
		var greenLineMaterial = new THREE.LineBasicMaterial( { color: green, linewidth: 2, } );
		var blueLineMaterial =  new THREE.LineBasicMaterial( { color: blue, linewidth: 2, } );

	}
	
	

	// SKATEBOARD PARTS ----------------------------------------------------------
	var topNoseMesh = new THREE.Mesh( noseTop, material );
	topNoseMesh.material.side = THREE.DoubleSide;

	var bottomNoseMesh = new THREE.Mesh( noseBottom, material );
	bottomNoseMesh.material.side = THREE.DoubleSide;

	var noseRightEdgeMesh = new THREE.Mesh( noseRightEdge, greenMaterial );
	//bottomNoseMesh.material.side = THREE.DoubleSide;

	var noseLeftEdgeMesh = new THREE.Mesh( noseLeftEdge, blueMaterial );
	noseLeftEdgeMesh.material.side = THREE.DoubleSide;

	var topTailMesh = new THREE.Mesh( tailTop, material );

	var bottomTailMesh = new THREE.Mesh( tailBottom, material );
	bottomTailMesh.material.side = THREE.DoubleSide;

	var tailRightEdgeMesh = new THREE.Mesh( tailRightEdge, greenMaterial );
	tailRightEdgeMesh.material.side = THREE.DoubleSide;

	var tailLeftEdgeMesh = new THREE.Mesh( tailLeftEdge, blueMaterial );
	tailLeftEdgeMesh.material.side = THREE.DoubleSide;

	var rightTopLineMesh = new THREE.Line( rightTopLine, greenLineMaterial );
	var rightBottomLineMesh = new THREE.Line( rightBottomLine, greenLineMaterial );

	var leftTopLineMesh = new THREE.Line( leftTopLine, blueLineMaterial );
	var leftBottomLineMesh = new THREE.Line( leftBottomLine, blueLineMaterial );


		$total_rolls[i] = $total_rolls[i]*pi/180;
		$total_pitchs[i] = $total_pitchs[i]*pi/180;
		// 'XYZ', 'YXZ', 'ZXY', 'ZYX', 'YZX', XZY
		var euler =  new THREE.Euler(  $total_rolls[i], $total_yaws[i]*-1,$total_pitchs[i],'YZX');
		var quaternion = new THREE.Quaternion();
		quaternion.setFromEuler(euler, 'YZX');


		skateboard.matrixAutoUpdate = true;
		skateboard.setRotationFromQuaternion(quaternion);
		skateboard.position.x = this_y_position*multiplier-centerX; //-2000;
		skateboard.position.z = this_x_position*multiplier;
		skateboard.position.y = this_z_position*multiplier;
		skateboard.updateMatrix();
		scene.add(skateboard);

		topNoseMesh.matrixAutoUpdate = true;
		topNoseMesh.setRotationFromQuaternion(quaternion);
		topNoseMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		topNoseMesh.position.z = this_x_position*multiplier;
		topNoseMesh.position.y = this_z_position*multiplier;
		topNoseMesh.updateMatrix();
		scene.add(topNoseMesh);

		bottomNoseMesh.matrixAutoUpdate = true;
		bottomNoseMesh.setRotationFromQuaternion(quaternion);
		bottomNoseMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		bottomNoseMesh.position.z = this_x_position*multiplier;
		bottomNoseMesh.position.y = this_z_position*multiplier;
		bottomNoseMesh.updateMatrix();
		scene.add(bottomNoseMesh);

		noseRightEdgeMesh.matrixAutoUpdate = true;
		noseRightEdgeMesh.setRotationFromQuaternion(quaternion);
		noseRightEdgeMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		noseRightEdgeMesh.position.z = this_x_position*multiplier;
		noseRightEdgeMesh.position.y = this_z_position*multiplier;
		noseRightEdgeMesh.updateMatrix();
		scene.add(noseRightEdgeMesh);

		noseLeftEdgeMesh.matrixAutoUpdate = true;
		noseLeftEdgeMesh.setRotationFromQuaternion(quaternion);
		noseLeftEdgeMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		noseLeftEdgeMesh.position.z = this_x_position*multiplier;
		noseLeftEdgeMesh.position.y = this_z_position*multiplier;
		noseLeftEdgeMesh.updateMatrix();
		scene.add(noseLeftEdgeMesh);

		topTailMesh.matrixAutoUpdate = true;
		topTailMesh.setRotationFromQuaternion(quaternion);
		topTailMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		topTailMesh.position.z = this_x_position*multiplier;
		topTailMesh.position.y = this_z_position*multiplier;
		topTailMesh.updateMatrix();
		scene.add(topTailMesh);

		bottomTailMesh.matrixAutoUpdate = true;
		bottomTailMesh.setRotationFromQuaternion(quaternion);
		bottomTailMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		bottomTailMesh.position.z = this_x_position*multiplier;
		bottomTailMesh.position.y = this_z_position*multiplier;
		bottomTailMesh.updateMatrix();
		scene.add(bottomTailMesh);

		tailRightEdgeMesh.matrixAutoUpdate = true;
		tailRightEdgeMesh.setRotationFromQuaternion(quaternion);
		tailRightEdgeMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		tailRightEdgeMesh.position.z = this_x_position*multiplier;
		tailRightEdgeMesh.position.y = this_z_position*multiplier;
		tailRightEdgeMesh.updateMatrix();
		scene.add(tailRightEdgeMesh);

		tailLeftEdgeMesh.matrixAutoUpdate = true;
		tailLeftEdgeMesh.setRotationFromQuaternion(quaternion);
		tailLeftEdgeMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		tailLeftEdgeMesh.position.z = this_x_position*multiplier;
		tailLeftEdgeMesh.position.y = this_z_position*multiplier;
		tailLeftEdgeMesh.updateMatrix();
		scene.add(tailLeftEdgeMesh);

		rightTopLineMesh.matrixAutoUpdate = true;
		rightTopLineMesh.setRotationFromQuaternion(quaternion);
		rightTopLineMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		rightTopLineMesh.position.z = this_x_position*multiplier;
		rightTopLineMesh.position.y = this_z_position*multiplier;
		rightTopLineMesh.updateMatrix();
		scene.add(rightTopLineMesh);

		rightBottomLineMesh.matrixAutoUpdate = true;
		rightBottomLineMesh.setRotationFromQuaternion(quaternion);
		rightBottomLineMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		rightBottomLineMesh.position.z = this_x_position*multiplier;
		rightBottomLineMesh.position.y = this_z_position*multiplier;
		rightBottomLineMesh.updateMatrix();
		scene.add(rightBottomLineMesh);

		leftTopLineMesh.matrixAutoUpdate = true;
		leftTopLineMesh.setRotationFromQuaternion(quaternion);
		leftTopLineMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		leftTopLineMesh.position.z = this_x_position*multiplier;
		leftTopLineMesh.position.y = this_z_position*multiplier;
		leftTopLineMesh.updateMatrix();
		scene.add(leftTopLineMesh);

		leftBottomLineMesh.matrixAutoUpdate = true;
		leftBottomLineMesh.setRotationFromQuaternion(quaternion);
		leftBottomLineMesh.position.x = this_y_position*multiplier-centerX; //-2000;
		leftBottomLineMesh.position.z = this_x_position*multiplier;
		leftBottomLineMesh.position.y = this_z_position*multiplier;
		leftBottomLineMesh.updateMatrix();
		scene.add(leftBottomLineMesh);

	}

	// var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ) );
	// scene.add( object );

	var black = new THREE.Color("rgb(20,20,20)");
	var floorMaterial = new THREE.MeshBasicMaterial( { color: black } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -15;
	floor.rotation.x = -Math.PI / 2;
	scene.add(floor);

	var limits = new THREE.BufferGeometry();
	var limitsPositions = [
		[-500, -500, 0],
		[500, -500, 0],
		[500, 500, 0],

		[500,500,0],
		[-500, 500, 0],
		[-500, -500, 0]
	]
	var vertices = new Float32Array( limitsPositions.length * 3 );
	for ( var i = 0; i < limitsPositions.length; i++ ){
	vertices[ i*3 + 0 ] = limitsPositions[i][0];
	vertices[ i*3 + 1 ] = limitsPositions[i][1];
	vertices[ i*3 + 2 ] = limitsPositions[i][2];
	}
	var white = new THREE.Color("rgb(100,100,100)");
	limits.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var limitsMaterial = new THREE.LineBasicMaterial( { color: white, linewidth: 2, } );
	var limitsMesh = new THREE.Line( limits, limitsMaterial );
	limitsMesh.position.y = -15;
	limitsMesh.rotation.x = -Math.PI / 2;
	scene.add(limitsMesh);

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






