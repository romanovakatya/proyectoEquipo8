package app.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.DAO.ILibroDAO;
import app.DTO.Libro;

@Service
public class LibroServiceImpl implements ILibroService {

	@Autowired
	ILibroDAO iLibroDAO;
	
	@Override
	public List<Libro> listarLibro() {
		// TODO Auto-generated method stub
		return iLibroDAO.findAll();
	}

	@Override
	public Libro guardarLibro(Libro libro) {
		// TODO Auto-generated method stub
		return iLibroDAO.save(libro);
	}

	@Override
	public Libro actualizarLibro(Libro libro) {
		// TODO Auto-generated method stub
		return iLibroDAO.save(libro);
	}

	@Override
	public void eliminarLibro(Long id) {
		// TODO Auto-generated method stub
		iLibroDAO.deleteById(id);
	}

	@Override
	public Libro libroXID(Long id) {
		// TODO Auto-generated method stub
		return iLibroDAO.findById(id).get();
	}

}
