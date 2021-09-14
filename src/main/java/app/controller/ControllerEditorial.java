package app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import app.dto.Editorial;
import app.service.EditorialServiceImpl;

@RestController
@RequestMapping("/api")
public class ControllerEditorial {

	@Autowired
	EditorialServiceImpl editorialServiceImpl;
	
	@GetMapping("/editoriales")
	public List<Editorial> listarEditorial(){
		return editorialServiceImpl.listarEditorial();
	}
	
	@PostMapping("/editoriales")
	public Editorial salvarEditorial(@RequestBody Editorial editorial){
		return editorialServiceImpl.guardarEditorial(editorial);
	}
	
	@GetMapping("/editoriales/{id}")
	public Editorial listarXID(@PathVariable(name="id") Long id){
		return editorialServiceImpl.editorialXID(id);
	}
	
	@GetMapping("/editoriales/nombre/{nombre}")
	public Editorial listarXNombre(@PathVariable(name="nombre") String nombre){
		return editorialServiceImpl.editorialXNombre(nombre);
	}
	
	//Actualizar
	@PutMapping("/editoriales/{id}")
	public Editorial actualizarEditorial(@PathVariable(name="id")Long id,@RequestBody Editorial editorial) {
				
		Editorial editorial_seleccionado= new Editorial();
		Editorial editorial_actualizado= new Editorial();
				
		editorial_seleccionado = editorialServiceImpl.editorialXID(id);
				
		editorial_seleccionado.setNombre(editorial.getNombre());
		editorial_seleccionado.setDireccion(editorial.getDireccion());
		editorial_seleccionado.setPagina_web(editorial.getPagina_web());	
		
		editorial_actualizado = editorialServiceImpl.actualizarEditorial(editorial_seleccionado);
			
		System.out.println("La Editorial actualizada es: "+ editorial_actualizado);
				
		return editorial_actualizado;
	}
	
	@DeleteMapping("/editoriales/{id}")
	public void eliminarEditorial(@PathVariable(name="id")Long id) {
		editorialServiceImpl.eliminarEditorial(id);
	}
}
