package app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import app.dto.Usuario;

public interface IUsuarioDAO extends JpaRepository<Usuario, Long> {

}
