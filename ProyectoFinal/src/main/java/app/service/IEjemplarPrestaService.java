package app.service;

import java.util.List;

import app.dto.EjemplarPresta;

public interface IEjemplarPrestaService {
	
	// Metodos del CRUD
		public List<EjemplarPresta> listarEjemplaresPrestados(); // Listar All ejemplares prestados,

		public EjemplarPresta guardarEjemplarPrestado(EjemplarPresta ejemplarPrestado);// Guarda un ejemplar Prestado de libro CREATE

		public EjemplarPresta ejemplarPrestadoXID(long id); // Leer datos de un ejemplar Prestado READ

		public EjemplarPresta actualizarEjemplarPrestado(EjemplarPresta ejemplarPrestado); // Actualiza datos del ejemplar Prestado UPDATE

		public void eliminarEjemplarPrestado(long id);// Elimina el ejemplarPrestado DELETE

}
