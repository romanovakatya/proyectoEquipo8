package app.service;

import java.util.List;

import app.dto.Libro;

public interface ILibroService {

	public List<Libro> listarLibro(); //Listar todos los Libros
	
	public Libro guardarLibro(Libro libro);	//Guarda un Libro CREATE
	
	public Libro actualizarLibro(Libro libro); //Actualiza datos del Libro UPDATE
	
	public void eliminarLibro(Long id);// Elimina el Libro DELETE
	
	public Libro libroXID(Long id); //Leer datos de un Libro por ID READ
	
	public List<Libro> libroXAutor(String autor); //Leer datos de un Libro por Autor READ
	
	public List<Libro> libroXTitulo(String titulo); //Leer datos de un Libro por Titulo READ
}
