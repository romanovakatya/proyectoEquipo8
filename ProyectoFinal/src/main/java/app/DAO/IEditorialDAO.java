package app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import app.DTO.Editorial;

public interface IEditorialDAO extends JpaRepository<Editorial, Long> {

}
