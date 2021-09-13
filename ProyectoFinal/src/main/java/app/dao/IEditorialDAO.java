package app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import app.dto.Editorial;

public interface IEditorialDAO extends JpaRepository<Editorial, Long> {

	public Editorial findByNombre(String nombre);
	
}
