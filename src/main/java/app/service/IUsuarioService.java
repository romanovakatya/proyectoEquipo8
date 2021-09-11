package app.service;

import java.util.List;

import app.dto.Usuario;

public interface IUsuarioService {
	
	// Métodos del CRUD
	public List<Usuario> listarUsuarios(); //Listar All 
	
	public Usuario guardarUsuario(Usuario usuario);	//Guarda un Usuario CREATE
	
	public Usuario usuarioXID(Long id); //Leer datos de un Usuario READ
	
	public Usuario actualizarUsuario(Usuario usuario); //Actualiza datos del Usuario UPDATE
	
	public void eliminarUsuario(Long id);// Elimina el Usuario DELETE

}
