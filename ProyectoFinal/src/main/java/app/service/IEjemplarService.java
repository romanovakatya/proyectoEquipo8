package app.service;

import java.util.List;

import app.dto.Ejemplar;

public interface IEjemplarService {

	// Metodos del CRUD
	public List<Ejemplar> listarEjemplares(); // Listar All

	public Ejemplar guardarEjemplar(Ejemplar ejemplar);// Guarda un Ejemplar de libro CREATE

	public List<Ejemplar> listarEjemplarIsbn(String isbn);// Listar ejemplares por campo isbn

	public Ejemplar ejemplarXID(long id); // Leer datos de un Ejemplar READ

	public Ejemplar actualizarEjemplar(Ejemplar ejemplar); // Actualiza datos del Ejemplar UPDATE

	public void eliminarEjemplar(long id);// Elimina el Ejemplar DELETE

}
