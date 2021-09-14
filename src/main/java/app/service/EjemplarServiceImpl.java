package app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.dao.IEjemplarDAO;
import app.dto.Ejemplar;

@Service
public class EjemplarServiceImpl implements IEjemplarService{
	
	@Autowired
	IEjemplarDAO iEjemplarDAO;

	@Override
	public List<Ejemplar> listarEjemplares() {
		
		return iEjemplarDAO.findAll();
	}

	@Override
	public Ejemplar guardarEjemplar(Ejemplar ejemplar) {
		
		return iEjemplarDAO.save(ejemplar);
	}

	@Override
	public List<Ejemplar> listarEjemplarIsbn(String isbn) {
		
		return iEjemplarDAO.findByIsbn(isbn);
	}

	@Override
	public Ejemplar ejemplarXID(long id) {
		
		return iEjemplarDAO.findById(id).get();
	}

	@Override
	public Ejemplar actualizarEjemplar(Ejemplar ejemplar) {
		
		return iEjemplarDAO.save(ejemplar);
	}

	@Override
	public void eliminarEjemplar(long id) {
		
		iEjemplarDAO.deleteById(id);
	}

}
