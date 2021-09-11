package app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.dao.IEjemplarPrestaDAO;
import app.dto.EjemplarPresta;

@Service
public class EjemplarPrestaServiceImpl implements IEjemplarPrestaService{
	
	@Autowired
	IEjemplarPrestaDAO iEjemplarPrestaDAO;

	@Override
	public List<EjemplarPresta> listarEjemplaresPrestados() {
		
		return iEjemplarPrestaDAO.findAll();
	}

	@Override
	public EjemplarPresta guardarEjemplarPrestado(EjemplarPresta ejemplarPrestado) {
		
		return iEjemplarPrestaDAO.save(ejemplarPrestado);
	}

	@Override
	public EjemplarPresta ejemplarPrestadoXID(long id) {
		
		return iEjemplarPrestaDAO.findById(id).get();
	}

	@Override
	public EjemplarPresta actualizarEjemplarPrestado(EjemplarPresta ejemplarPrestado) {
		
		return iEjemplarPrestaDAO.save(ejemplarPrestado);
	}

	@Override
	public void eliminarEjemplarPrestado(long id) {
		
		iEjemplarPrestaDAO.deleteById(id);
	}
}
