<?php
require __DIR__ .'/connection.php';
class Profesores{
	protected $db;
	public function __construct(){
		$this->db = DB();
	}
	public function Read(){
		$query = $this->db->prepare("SELECT id,nombre,apellidos,direccion,poblacion,cp,provincia,telefono,fecha_de_nacimiento,dni FROM profesores  ORDER BY nombre ASC");
		$query->execute();
		$data["success"] = true;
		$data["data"]["profesores"] = array();
		while($row = $query-> fetchAll(PDO::FETCH_ASSOC)){
			$data["data"]["profesores"] = $row;
		}
		header('Content-type: application/json; charset=utf-8');
		return json_encode($data);
	}

	public function searchProfesores($id,$nombre){

		$query = $this->db->prepare("SELECT * FROM profesores WHERE id=:id or nombre=:nombre");
		$query->bindParam(":id", $id, PDO::PARAM_STR);
		$query->bindParam(":nombre", $nombre, PDO::PARAM_STR);
		$query->execute();
		$data["success"] = true;
		$data["data"]["profesor"] = array();
		while($row = $query-> fetch(PDO::FETCH_ASSOC)){
			$data["data"]["profesor"] = $row;
		}
		header('Content-type: application/json; charset=utf-8');
		return json_encode($data);
	}

	
	public function addProfesores($nombre,$apellidos,$direccion,$poblacion,$cp,$provincia,$telefono,$fecha_de_nacimiento,$dni){
		try {
	        $query =  $this->db->prepare("INSERT INTO profesores(nombre,apellidos,direccion,poblacion,cp,provincia,telefono,fecha_de_nacimiento,dni) VALUES (?,?,?,?,?,?,?,?,?)");
	        $query->execute(array($nombre,$apellidos,$direccion,$poblacion,$cp,$provincia,$telefono,$fecha_de_nacimiento,$dni));
	       	$data["success"] = true;
	        $datos = [
				'id' =>$this->db->LastInsertId(),
				'nombre' =>$nombre,
				'apellidos' =>$apellidos,
				'direccion' =>$direccion,
				'poblacion' =>$poblacion,
				'cp' =>$cp,
				'provincia' =>$provincia,
				'telefono' =>$telefono,
				'fecha_de_nacimiento' =>$fecha_de_nacimiento,
				'dni' =>$dni
			];
			$data["data"]["profesor"] = $data;
			return json_encode($data);
	    } catch(PDOException $e) {
	        echo $e->getMessage();
	    }
		
	}

	public function deleteProfesores($id){
		try {
        $query = $this->db->prepare("DELETE FROM profesores WHERE id=:id");
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $r = $query->execute();
        $data["success"] = true;
        $data["data"]["profesor"] = $r;
        echo  json_encode($data);
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}

	public function updateProfesores($id,$nombre,$apellidos,$direccion,$poblacion,$cp,$provincia,$telefono,$fecha_de_nacimiento,$dni){
		try {
        $query = $this->db->prepare("UPDATE profesores SET 
        	nombre = :nombre,
        	apellidos = :apellidos,
        	direccion = :direccion,
        	poblacion = :poblacion,
        	cp = :cp,
        	provincia = :provincia,
        	telefono = :telefono,
        	fecha_de_nacimiento = :fecha_de_nacimiento,
        	dni = :dni

        	WHERE id = :id");
        $query->bindParam(":nombre", $nombre, PDO::PARAM_STR);
        $query->bindParam(":apellidos", $apellidos, PDO::PARAM_STR);
        $query->bindParam(":direccion", $direccion, PDO::PARAM_STR);
        $query->bindParam(":poblacion", $poblacion, PDO::PARAM_STR);
        $query->bindParam(":cp", $cp, PDO::PARAM_STR);
        $query->bindParam(":provincia", $provincia, PDO::PARAM_STR);
        $query->bindParam(":telefono", $telefono, PDO::PARAM_STR);
        $query->bindParam(":fecha_de_nacimiento", $fecha_de_nacimiento, PDO::PARAM_STR);
        $query->bindParam(":dni", $dni, PDO::PARAM_STR);
        $query->bindParam(":id", $id, PDO::PARAM_INT);
        $r = $query->execute();
        $data["success"] = true;
        if ($r == true) {
        	return json_encode($data);
        }
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}

?>