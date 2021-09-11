package app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.dto.Ejemplar;
import app.service.EjemplarServiceImpl;


@RestController
@RequestMapping("/api")
public class EjemplarController {

	@Autowired
	EjemplarServiceImpl ejemplarServiceImpl;
	
	@GetMapping("/ejemplares")
	public List<Ejemplar> listarEjemplares() {

		return ejemplarServiceImpl.listarEjemplares();
	}

	@PostMapping("/ejemplares")
	public Ejemplar guardarEjemplar(@RequestBody Ejemplar ejemplar) {

		return ejemplarServiceImpl.guardarEjemplar(ejemplar);
	}

	@GetMapping("/ejemplares/isbn/{isbn}")
	public List<Ejemplar> listarEjemplarIsbn(@PathVariable(name = "isbn") String isbn) {

		return ejemplarServiceImpl.listarEjemplarIsbn(isbn);
	}

	@GetMapping("/ejemplares/{id}")
	public Ejemplar ejemplarXID(@PathVariable(name = "id") long id) {

		Ejemplar ejemplar_xid = new Ejemplar();

		ejemplar_xid = ejemplarServiceImpl.ejemplarXID(id);

		System.out.println("ejemplar_xid: " + ejemplar_xid);

		return ejemplar_xid;
	}

	@PutMapping("/ejemplares/{id}")
	public Ejemplar actualizarEjemplar(@PathVariable(name = "id") long id, @RequestBody Ejemplar ejemplar) {

		Ejemplar ejemplar_seleccionado = new Ejemplar();
		Ejemplar ejemplar_actualizado = new Ejemplar();
		
		ejemplar_seleccionado = ejemplarServiceImpl.ejemplarXID(id);
		ejemplar_seleccionado.setIsbn(ejemplar.getIsbn());
		ejemplar_seleccionado.setStatusLibre(ejemplar.isStatusLibre());
		ejemplar_seleccionado.setNumeroPaginas(ejemplar.getNumeroPaginas());
		ejemplar_seleccionado.setPortada(ejemplar.getPortada());
		ejemplar_seleccionado.setPropietario(ejemplar.getPropietario());
		ejemplar_seleccionado.setLibro(ejemplar.getLibro());
		
		ejemplar_actualizado = ejemplarServiceImpl.actualizarEjemplar(ejemplar_seleccionado);
		
		
		System.out.println( "ejemplar_actualizado: " + ejemplar_actualizado);
		return ejemplar_actualizado;
	}

	@DeleteMapping("/ejemplares/{id}")
	public void eliminarEjemplar(@PathVariable(name = "id") long id) {

		ejemplarServiceImpl.eliminarEjemplar(id);
	}
}
