package app.service;

import java.util.List;

import app.dto.Libro;

public interface ILibroService {

	public List<Libro> listarLibro(); //Listar todos los Libros
	
	public Libro guardarLibro(Libro libro);	//Guarda un Libro CREATE
	
	public Libro actualizarLibro(Libro libro); //Actualiza datos del Libro UPDATE
	
	public void eliminarLibro(Long id);// Elimina el Libro DELETE
	
	public Libro libroXID(Long id); //Leer datos de un Libro por ID READ
	
}
