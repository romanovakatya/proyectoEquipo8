package app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import app.DTO.Libro;

public interface ILibroDAO extends JpaRepository<Libro, Long> {

}
