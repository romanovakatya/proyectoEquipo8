package app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import app.dto.EjemplarPresta;
import app.dto.Usuario;

public interface IEjemplarPrestaDAO extends JpaRepository<EjemplarPresta, Long>{

	public List<EjemplarPresta> findByUsuarioPrestamo(Usuario usuario);
	
}
