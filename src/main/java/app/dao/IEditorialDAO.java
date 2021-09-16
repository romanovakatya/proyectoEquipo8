package app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import app.dto.Editorial;

public interface IEditorialDAO extends JpaRepository<Editorial, Long> {

	public List<Editorial> findByNombre(String nombre);
	
}
