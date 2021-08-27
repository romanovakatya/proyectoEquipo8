package app.service;

import java.util.List;

import app.dto.Editorial;

public interface IEditorialService {

	public List<Editorial> listarEditorial(); //Listar todas las Editoriales 
	
	public Editorial guardarEditorial(Editorial editorial);	//Guarda una Editorial CREATE
	
	public Editorial actualizarEditorial(Editorial editorial); //Actualiza datos de la Editorial UPDATE
	
	public void eliminarEditorial(Long id);// Elimina la Editorial DELETE
	
	public Editorial editorialXID(Long id); //Leer datos de una Editorial por ID READ
	
}
