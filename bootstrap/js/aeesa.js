var url = '../controlador/controlador_profesores.php';
$(document).ready(function(){
	getProfesores();
});
function getProfesores(){
		console.log('Inicia el proceso consulta------------------------');
		var myObj = '{"op":"consultar"}';
		var datos = JSON.parse( myObj );
		console.log(datos);
		$.ajax({
			url : url,
			data : datos,
			type : 'POST',
			dataType : 'json',
			success : function(response) {
				console.log(response);
				if (response.success) {
					console.log('Consulta exitosa.');
					var html = "";
					html += '<table id="tabla" class="table table-bordered table-responsive table-striped table-hover"><thead>';
					html += '<tr role="row"><th>Id</th><th>Nombre</th><th>Apellidos</th><th>Dirección</th><th>Población</th><th>C.P.</th><th>Provincia</th><th>Telefono</th>';
					html += '<th>Fecha de Nacimiento</th><th>DNI</th><th>Acción</th></tr>';
					html += '</thead><tbody>';
					$.each(response.data.profesores, function(key,value){
						html += '<tr>';
						html += '<td>'+value['id']+'</td>';
						html +='<td onclick="getProfesor('+value['id']+')"><a>'+value['nombre']+'</a></td>';
						html +='<td>'+value['apellidos']+'</td>';
						html +='<td>'+value['direccion']+'</td>';
						html +='<td>'+value['poblacion']+'</td>';
						html +='<td>'+value['cp']+'</td>';
						html +='<td>'+value['provincia']+'</td>';
						html +='<td>'+value['telefono']+'</td>';
						html +='<td>'+value['fecha_de_nacimiento']+'</td>';
						html +='<td>'+value['dni']+'</td>';
						html +='<td>';
						html +='<button onclick="getProfesor('+value['id']+')" class=" btn btn-primary  btn-xs" ><li class="fas fa-pencil-alt"></li>Editar</button>';
						html +='<button onclick="deleteProfesor('+value['id']+')" class="eliminar btn btn-danger btn-xs" ><li class="eliminar fas fa-trash"></li>Eliminar</button>';
						html +='</td>';
						html += '</tr>';
					});
					html += '</tbody></table>';
					$("#contenido").html(html);
					/*Codigo funcional, para futuro proyecto 
					for (var i in response.data.profesores) {
						console.log(response.data.profesores[i].id);
					}
					*/
				}
			},
			error : function(xhr, status) {
				console.log('Disculpe, existió un problema');
				//console.log(xhr);
				//console.log(status);
			},
			complete : function(xhr, status) {
				console.log('Petición realizada, profesores JS');
				console.log('Termino el proceso consulta------------------------');
			}
		});
		
}
//Metodo para agregar un nuevo dato a la tabla profesores
function addProfesor(){
	console.log('Inicia el proceso agregar datos a la bd.------------------------');
	var html = '';
	html +='<div class="alert alert- alert-warning" id="myAlert_error">';
    html +='<a  class="close">&times;</a>';
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var direccion = document.getElementById("direccion").value;
	var poblacion = document.getElementById("poblacion").value;
	var cp = document.getElementById("cp").value;
	var provincia = document.getElementById("provincia").value;
	var telefono = document.getElementById("telefono").value;
	var fecha_de_nacimiento = document.getElementById("fecha_de_nacimiento").value;
	var dni = document.getElementById("dni").value;
	if (nombre == "") {
		html +='<strong>Ingrese!</strong> El campo nombre es obligatorio.</div>';
		$("#error").html(html);
	}else if(apellidos == ""){
		html +='<strong>Ingrese!</strong> El campo apellidos es obligatorio.</div>';
		$("#error").html(html);
	}else if(direccion == ""){
		html +='<strong>Ingrese!</strong> El campo dirección es obligatorio.</div>';
		$("#error").html(html);
	}else if(poblacion == ""){
		html +='<strong>Ingrese!</strong> El campo poblacionón es obligatorio.</div>';
		$("#error").html(html);
	}else if(cp == ""){
		html +='<strong>Ingrese!</strong> El campo codigo postal es obligatorio.</div>';
		$("#error").html(html);
	}else if(provincia == ""){
		html +='<strong>Ingrese!</strong> El campo provincia es obligatorio.</div>';
		$("#error").html(html);
	}else if(telefono == ""){
		html +='<strong>Ingrese!</strong> El campo telefono es obligatorio.</div>';
		$("#error").html(html);
	}else if(fecha_de_nacimiento == ""){
		html +='<strong>Ingrese!</strong> El campo fecha de nacimiento es obligatorio.</div>';
		$("#error").html(html);
	}else if(dni == ""){
		html +='<strong>Ingrese!</strong> El campo DNI es obligatorio.</div>';
		$("#error").html(html);
	}else{
		var datos = {op: "agregar",
				nombre: nombre,
				apellidos: apellidos,
				direccion: direccion,
				poblacion: poblacion,
				cp: cp,
				provincia: provincia,
				telefono: telefono,
				fecha_de_nacimiento: fecha_de_nacimiento,
				dni: dni
			};
		console.log(datos);
		$.ajax({
				url : url,
				data : datos,
				type : 'POST',
				dataType : 'json',
				success : function(response) {
					console.log('start response ----> nuevo profesor');
					console.log(response);
					if (response.success) {
						getProfesores();
						$("#add_profesor").modal('hide');
						$("#myAlert_guardar").show();
						vaciarCampos()
					}
				},
				error : function(xhr, status) {
					console.log('Disculpe, se presento un problema');
					//console.log(xhr);
					//console.log(status);
				},
				complete : function(xhr, status) {
					console.log('Petición realizada, profesores JS');
					console.log('Termina el proceso agregar datos a la bd.------------------------');
				}
		});
	}
	
	
}

function deleteProfesor(idprofesor){
	console.log(idprofesor);
	var datos = {
		op:"eliminar",
		id:idprofesor
	}
	console.log(datos);
	var conf =  confirm("Realmente quieres eliminar los datos del profesor.?");
	if (conf ==  true) {

		$.ajax({
				url : url,
				data : datos,
				type : 'POST',
				dataType : 'json',
				success : function(response) {
					console.log('start response ----> nuevo profesor');
					console.log(response);
					if (response.success) {
						getProfesores();
						$("#myAlert_guardar").hide();
						$("#myAlert_eliminar").show();
					}
				},
				error : function(xhr, status) {
					console.log('Disculpe, se presento un problema');
					//console.log(xhr);
					//console.log(status);
				},
				complete : function(xhr, status) {
					console.log('Petición realizada, profesores JS');
				}
		});
	}
}
//se realiza la busqueda del profesor
function getProfesor(idprofesor){
	var datos = {
		op:"busqueda",
		id:idprofesor
	}
	$.ajax({
			url : url,
			data : datos,
			type : 'POST',
			dataType : 'json',
			success : function(response) {
				console.log(response);
				if (response.success) {
					console.log('Consulta exitosa');
					document.getElementById("id_actualizar").value = response.data.profesor.id;
					document.getElementById("nombre_actualizar").value = response.data.profesor.nombre;
					document.getElementById("apellidos_actualizar").value = response.data.profesor.apellidos;
					document.getElementById("direccion_actualizar").value = response.data.profesor.direccion;
					document.getElementById("poblacion_actualizar").value = response.data.profesor.poblacion;
					document.getElementById("cp_actualizar").value = response.data.profesor.cp;
					document.getElementById("provincia_actualizar").value = response.data.profesor.provincia;
					document.getElementById("telefono_actualizar").value = response.data.profesor.telefono;
					document.getElementById("fecha_de_nacimiento_actualizar").value = response.data.profesor.fecha_de_nacimiento;
					document.getElementById("dni_actualizar").value = response.data.profesor.dni;
					$('#update_profesor').modal('show');
					
				}
			},
			error : function(xhr, status) {
				console.log('Disculpe, existió un problema');
				//console.log(xhr);
				//console.log(status);
			},
			complete : function(xhr, status) {
				console.log('Petición realizada, profesores JS');
				console.log('Termino el proceso consulta------------------------');
			}
		});

}

//Función para actualizar los datos de un profesor 
function updateProfesor(){
	console.log('Inicia el proceso para actualizar datos en la bd.------------------------');
	var id = document.getElementById("id_actualizar").value;
	var nombre = document.getElementById("nombre_actualizar").value;
	var apellidos = document.getElementById("apellidos_actualizar").value;
	var direccion = document.getElementById("direccion_actualizar").value;
	var poblacion = document.getElementById("poblacion_actualizar").value;
	var cp = document.getElementById("cp_actualizar").value;
	var provincia = document.getElementById("provincia_actualizar").value;
	var telefono = document.getElementById("telefono_actualizar").value;
	var fecha_de_nacimiento = document.getElementById("fecha_de_nacimiento_actualizar").value;
	var dni = document.getElementById("dni_actualizar").value;
	var datos = {
				op: "actualizar",
				id: id,
				nombre: nombre,
				apellidos: apellidos,
				direccion: direccion,
				poblacion: poblacion,
				cp: cp,
				provincia: provincia,
				telefono: telefono,
				fecha_de_nacimiento: fecha_de_nacimiento,
				dni: dni
			};
	console.log(datos);
	$.ajax({
			url : url,
			data : datos,
			type : 'POST',
			dataType : 'json',
			success : function(response) {
				console.log('start response ----> se actualizaron los datos del profesor');
				console.log(response);
				if (response.success) {
					getProfesores();
					$('#update_profesor').modal('hide');
					$("#myAlert_editar").show();
				}
			},
			error : function(xhr, status) {
				console.log('Disculpe, se presento un problema');
				//console.log(xhr);
				//console.log(status);
			},
			complete : function(xhr, status) {
				console.log('Petición realizada, profesores JS');
				console.log('Termina el proceso agregar datos a la bd.------------------------');
			}
	});
	
}

function vaciarCampos(){
	document.getElementById("nombre").value  = '';
	document.getElementById("apellidos").value = '';
	document.getElementById("direccion").value = '';
	document.getElementById("poblacion").value = '';
	document.getElementById("cp").value = '';
	document.getElementById("provincia").value = '';
	document.getElementById("telefono").value = '';
	document.getElementById("fecha_de_nacimiento").value = '';
	document.getElementById("dni").value = '';
}

//Funcion no implementada por falta de tiempo 
function nif(evt) {
  var dni_entrada =document.getElementById('dni');
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       document.getElementById("dni_mensaje").value = 'Dni erroneo, la letra del NIF no se corresponde';
     }else{
       document.getElementById("dni_mensaje").value = 'Dni correcto';
     }
  }else{
     document.getElementById("dni_mensaje").value = 'Dni erroneo, formato no válido';
   }
}

