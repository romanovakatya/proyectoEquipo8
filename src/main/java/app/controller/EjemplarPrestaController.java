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

import app.dto.EjemplarPresta;
import app.service.EjemplarPrestaServiceImpl;


@RestController
@RequestMapping("/api")
public class EjemplarPrestaController {

	@Autowired
	EjemplarPrestaServiceImpl ejemplarPrestaServiceImpl;
	
	@GetMapping("/ejemplaresPrestados")
	public List<EjemplarPresta> listarEjemplaresPrestados() {

		return ejemplarPrestaServiceImpl.listarEjemplaresPrestados();
	}

	@PostMapping("/ejemplaresPrestados")
	public EjemplarPresta guardarEjemplarPrestado(@RequestBody EjemplarPresta ejemplarPrestado) {

		return ejemplarPrestaServiceImpl.guardarEjemplarPrestado(ejemplarPrestado);
	}

	@GetMapping("/ejemplaresPrestados/{id}")
	public EjemplarPresta ejemplarPrestadoXID(@PathVariable(name = "id") long id) {

		EjemplarPresta ejemplarPrestado_xid = new EjemplarPresta();

		ejemplarPrestado_xid = ejemplarPrestaServiceImpl.ejemplarPrestadoXID(id);

		System.out.println("ejemplarPrestado_xid: " + ejemplarPrestado_xid);

		return ejemplarPrestado_xid;
	}

	@PutMapping("/ejemplaresPrestados/{id}")
	public EjemplarPresta actualizarEjemplarPrestado(@PathVariable(name = "id") long id, @RequestBody EjemplarPresta ejemplarPrestado) {

		EjemplarPresta ejemplarPrestado_seleccionado = new EjemplarPresta();
		EjemplarPresta ejemplarPrestado_actualizado = new EjemplarPresta();
		
		ejemplarPrestado_seleccionado = ejemplarPrestaServiceImpl.ejemplarPrestadoXID(id);
		ejemplarPrestado_seleccionado.setEjemplar(ejemplarPrestado.getEjemplar());
		ejemplarPrestado_seleccionado.setUsuario_prestamo(ejemplarPrestado.getUsuario_prestamo());
		ejemplarPrestado_seleccionado.setInicio_prestamo(ejemplarPrestado.getInicio_prestamo());
		ejemplarPrestado_seleccionado.setFin_prestamo(ejemplarPrestado.getFin_prestamo());
	
		
		ejemplarPrestado_actualizado = ejemplarPrestaServiceImpl.actualizarEjemplarPrestado(ejemplarPrestado_seleccionado);
		
		
		System.out.println( "ejemplarPrestado_actualizado: " + ejemplarPrestado_actualizado);
		return ejemplarPrestado_actualizado;
	}

	@DeleteMapping("/ejemplaresPrestados/{id}")
	public void eliminarEjemplarPrestado(@PathVariable(name = "id") long id) {

		ejemplarPrestaServiceImpl.eliminarEjemplarPrestado(id);
	}
}
