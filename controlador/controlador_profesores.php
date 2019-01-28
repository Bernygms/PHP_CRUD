<?php
if (isset($_POST['op'])) {
	include_once dirname( __DIR__ ) .'/modelo/model_profesores.php';
	# code...
	$op =  (isset($_POST['op']) ? $_POST['op'] : NULL);
	$id = (isset($_POST['id']) ? $_POST['id'] : NULL);
	$nombre = (isset($_POST['nombre']) ? $_POST['nombre'] : NULL);
	$apellidos = (isset($_POST['apellidos']) ? $_POST['apellidos'] : NULL);
	$direccion = (isset($_POST['direccion']) ? $_POST['direccion'] : NULL);
	$poblacion = (isset($_POST['poblacion']) ? $_POST['poblacion'] : NULL);
	$cp = (isset($_POST['cp']) ? $_POST['cp'] : NULL);
	$provincia = (isset($_POST['provincia']) ? $_POST['provincia'] : NULL);
	$telefono = (isset($_POST['telefono']) ? $_POST['telefono'] : NULL);
	$fecha_de_nacimiento = (isset($_POST['fecha_de_nacimiento']) ? $_POST['fecha_de_nacimiento'] : NULL);
	$dni = (isset($_POST['dni']) ? $_POST['dni'] : NULL);
	
	switch ($op) {
		case 'consultar':
			# Carga de datos al inicio ... 
			$objProfesores = new Profesores();
			echo $objProfesores->Read();
			break;
		case 'busqueda':
			# Consulta por nombre en la tabla profesores
			$objProfesores = new Profesores();
			echo  $objProfesores->searchProfesores($id,$nombre);
			break;
		case 'agregar':
			# Agreamos nuevo dato en la tabla profesores
			$objProfesores = new Profesores();
			echo  $objProfesores->addProfesores($nombre,$apellidos,$direccion,$poblacion,$cp,$provincia,$telefono,$fecha_de_nacimiento,$dni);
			break;
		case 'actualizar':
			# Actualizamos la tabla de profesores
			$objProfesores = new Profesores();
			echo  $objProfesores->updateProfesores($id,$nombre,$apellidos,$direccion,$poblacion,$cp,$provincia,$telefono,$fecha_de_nacimiento,$dni);
			break;
		case 'eliminar':
			# Eliminamos por parametro en la tabla profesores
			$objProfesores = new Profesores();
			$r =  $objProfesores->deleteProfesores($id);
			json_encode($r);
			//echo json_encode(['success' => ['success' => 'LLego la petición "'.$id.$op.'"']]);

			break;
		default:
			# code...
			echo json_encode(['errors' => ['error' => 'default.']]);
			break;
	}
}else{
	echo  json_encode(['errors' => ['error' => 'Datos incompletos.']]);
}
?>