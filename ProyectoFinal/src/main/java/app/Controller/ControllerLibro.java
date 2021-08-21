package app.Controller;

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

import app.DTO.Libro;
import app.Service.LibroServiceImpl;

@RestController
@RequestMapping("/api")
public class ControllerLibro {

	@Autowired
	LibroServiceImpl libroServiceImpl;
	
	@GetMapping("/libros")
	public List<Libro> listarLibro(){
		return libroServiceImpl.listarLibro();
	}
	
	@PostMapping("/libros")
	public Libro salvarLibro(@RequestBody Libro libro){
		return libroServiceImpl.guardarLibro(libro);
	}
	
	//Actualizar
	@PutMapping("/libros/{id}")
	public Libro actualizarLibro(@PathVariable(name="id")Long id,@RequestBody Libro libro) {
				
		Libro libro_seleccionado= new Libro();
		Libro libro_actualizado= new Libro();
				
		libro_seleccionado = libroServiceImpl.libroXID(id);
				
		libro_seleccionado.setAutor(libro.getAutor());
		libro_seleccionado.setTitulo(libro.getTitulo());
		libro_seleccionado.setDescripcion(libro.getDescripcion());
		libro_seleccionado.setEditorial(libro.getEditorial());
		
			
		libro_actualizado = libroServiceImpl.actualizarLibro(libro_seleccionado);
			
		System.out.println("El libro actualizado es: "+ libro_actualizado);
				
		return libro_actualizado;
	}
	
	@DeleteMapping("/libros/{id}")
	public void eliminarLibro(@PathVariable(name="id")Long id) {
		libroServiceImpl.eliminarLibro(id);
	}
	
	@GetMapping("/libros/{id}")
	public Libro listarXID(@PathVariable(name="id")Long id){
		return libroServiceImpl.libroXID(id);
	}
	
}
