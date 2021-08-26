package app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import app.dto.Ejemplar;

public interface IEjemplarDAO extends JpaRepository<Ejemplar, Long>{
	
	public List<Ejemplar> findByIsbn(String isbn);
}
