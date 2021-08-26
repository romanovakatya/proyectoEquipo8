package app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.dto.Usuario;
import app.dao.IUsuarioDAO;

@Service
public class UsuarioServiceImpl implements IUsuarioService {
	
	@Autowired
	IUsuarioDAO usuariodao;
	
	@Override
	public List<Usuario> listarUsuarios() {
		return usuariodao.findAll();
	}

	@Override
	public Usuario guardarUsuario(Usuario usuario) {
		return usuariodao.save(usuario);
	}

	@Override
	public Usuario usuarioXID(Long id) {
		return usuariodao.findById(id).get();
	}

	@Override
	public Usuario actualizarUsuario(Usuario usuario) {
		return usuariodao.save(usuario);
	}

	@Override
	public void eliminarUsuario(Long id) {
		usuariodao.deleteById(id);
	}
	
}
