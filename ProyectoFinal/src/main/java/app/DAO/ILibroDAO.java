package app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import app.dto.Libro;

public interface ILibroDAO extends JpaRepository<Libro, Long> {

}
