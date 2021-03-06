<?php 

abstract class Persona
{
    private $_apellido;
    private $_dni;
    private $_nombre;
    private $_sexo;
    
    public function __construct( $nombre, $apellido, $dni, $sexo)
    {
        $this->_nombre=$nombre;
        $this->_apellido=$apellido;
        $this->_dni=$dni;
        $this->_sexo=strtoupper($sexo);
        
    }

    public function GetApellido()
    {
        return $this->_apellido;
    }

    public function GetDni()
    {
        return $this->_dni;
    }

    public function GetNombre()
    {
        return $this->_nombre;
    }

    public function GetSexo()
    {
        return $this->_sexo;
    }

    public abstract function Hablar($idioma);
    

    public function ToString()
    {
        return $this->GetApellido()." - " .$this->GetNombre() ." - ". $this->GetDni() . " - " . $this->GetSexo();
    }

    public function ToJson()
    {
        $json = new stdClass();
        $json->apellido=$this->_apellido;
        $json->nombre=$this->_nombre;
        $json->sexo=$this->_sexo;
        $json->dni=$this->_dni;

        return $json;
    }
}
?>