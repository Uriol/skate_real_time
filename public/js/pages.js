
function show_visualizationPage(){

	$('#sensorPage').removeClass('active').addClass('inActive');
	$('#visualizationPage').removeClass('inActive').addClass('active');
}

function close_visualizationPage(){
	$('#visualizationPage').removeClass('active').addClass('inActive');
	$('#sensorPage').removeClass('inActive').addClass('active');
}

$('#close').on('click', function(){
	close_visualizationPage();
	resetValues();
})