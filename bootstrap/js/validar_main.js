$(document).ready(function(){
	init();
	$(".close").click(function(){
		init();
		$("#myAlert_error").hide();

	});
	$(".guardar").click(function(){
		init();
	});
	$(".guardar_editado").click(function(){
		init();
	});
	$("#search").keyup(function(){
 	_this = this;
 	// Show only matching TR, hide rest of them
		$.each($("#tabla tbody tr"), function() {
			if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
				 $(this).hide();
 			else
				 $(this).show();
 		});
 	});
 	//Calendario para el modal add
	$('#fecha_de_nacimiento').datepicker({
	    format: "dd-mm-yyyy",
		language: "es",
		autoclose: true,
		todayBtn: true
	 }).on(
	  'show', function() {			
		// Obtener valores actuales z-index de cada elemento
		var zIndexModal = $('#add_profesor').css('z-index');
		var zIndexFecha = $('.fecha_de_nacimiento').css('z-index');
	 
	        // alert(zIndexModal + zIndexFEcha);
	 
	        // Re asignamos el valor z-index para mostrar sobre la ventana modal
	        $('.fecha_de_nacimiento').css('z-index',zIndexModal+1);
	});
	 
	//Calendario para el modal update
	$('#fecha_de_nacimiento_actualizar').datepicker({
	    format: "dd-mm-yyyy",
		language: "es",
		autoclose: true,
		todayBtn: true
	 }).on(
	  'show', function() {			
		// Obtener valores actuales z-index de cada elemento
		var zIndexModal = $('#update_profesor').css('z-index');
		var zIndexFecha = $('.fecha_de_nacimiento_actualizar').css('z-index');
	 
	        // alert(zIndexModal + zIndexFEcha);
	 
	        // Re asignamos el valor z-index para mostrar sobre la ventana modal
	        $('.fecha_de_nacimiento_actualizar').css('z-index',zIndexModal+1);
	});

});

function init(){
	$("#myAlert_guardar").hide();
	$("#myAlert_eliminar").hide();
	$("#myAlert_editar").hide();
}





