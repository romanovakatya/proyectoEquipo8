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

import app.dto.Usuario;
import app.service.UsuarioServiceImpl;

@RestController
@RequestMapping("/api")
public class UsuarioController {
	
	@Autowired
	UsuarioServiceImpl usuarioServImpl;
	
	@GetMapping("/usuarios")
	public List<Usuario> listarUsuarios(){
		return usuarioServImpl.listarUsuarios();
	}
	
	
	@PostMapping("/usuarios")
	public Usuario guardarUsuario(@RequestBody Usuario usuario) {
		
		return usuarioServImpl.guardarUsuario(usuario);
	}
	
	
	@GetMapping("/usuarios/{id}")
	public Usuario usuarioXID(@PathVariable(name="id") Long id) {
		
		Usuario usuario_xid= new Usuario();
		
		usuario_xid=usuarioServImpl.usuarioXID(id);
		
		return usuario_xid;
	}
	
	@PutMapping("/usuarios/{id}")
	public Usuario actualizarUsuario(@PathVariable(name="id")Long id,@RequestBody Usuario usuario) {
		
		Usuario usuario_seleccionado= new Usuario();
		Usuario usuario_actualizado= new Usuario();
		
		usuario_seleccionado= usuarioServImpl.usuarioXID(id);
		
		usuario_seleccionado.setNombre(usuario.getNombre());
		usuario_seleccionado.setApellidos(usuario.getApellidos());
		usuario_seleccionado.setContrasena(usuario.getContrasena());
		usuario_seleccionado.setEmail(usuario.getEmail());
		usuario_seleccionado.setUsername(usuario.getUsername());
		
		usuario_actualizado = usuarioServImpl.actualizarUsuario(usuario_seleccionado);
		
		return usuario_actualizado;
	}
	
	@DeleteMapping("/usuarios/{id}")
	public void eliminarUsuario(@PathVariable(name="id")Long id) {
		usuarioServImpl.eliminarUsuario(id);
	}

	
}
