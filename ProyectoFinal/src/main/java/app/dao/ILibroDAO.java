package app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import app.dto.Libro;

public interface ILibroDAO extends JpaRepository<Libro, Long> {

	public List<Libro> findByAutor(String autor);
	
	public List<Libro> findByTitulo(String titulo);
	
}
