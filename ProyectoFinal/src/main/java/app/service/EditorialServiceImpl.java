package app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.dao.IEditorialDAO;
import app.dto.Editorial;

@Service
public class EditorialServiceImpl implements IEditorialService {

	@Autowired
	IEditorialDAO iEditorialDAO;
	
	@Override
	public List<Editorial> listarEditorial() {
		// TODO Auto-generated method stub
		return iEditorialDAO.findAll();
	}

	@Override
	public Editorial guardarEditorial(Editorial editorial) {
		// TODO Auto-generated method stub
		return iEditorialDAO.save(editorial);
	}

	@Override
	public Editorial actualizarEditorial(Editorial editorial) {
		// TODO Auto-generated method stub
		return iEditorialDAO.save(editorial);
	}

	@Override
	public void eliminarEditorial(Long id) {
		// TODO Auto-generated method stub
		iEditorialDAO.deleteById(id);
	}

	@Override
	public Editorial editorialXID(Long id) {
		// TODO Auto-generated method stub
		return iEditorialDAO.findById(id).get();
	}

}
