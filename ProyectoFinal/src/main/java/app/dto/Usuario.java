package app.dto;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="usuarios")
public class Usuario {
	
	// Atributos de la entidad usuarios
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="contrasena")
	private String contrasena;
	@Column(name="nombre")
	private String nombre;
	@Column(name="apellidos")
	private String apellidos;
	@Column(name="username")
	private String username;
	@Column(name="email")
	private String email;
	
	@OneToMany
	@JoinColumn(name="id")
	private List<EjemplarPresta> ejemplarPrestado;
	@OneToMany
	@JoinColumn(name="id")
	private List<Ejemplar> ejemplar;
	
	// Constructores
	public Usuario() {

	}
	
	/**
	 * 
	 * @param id
	 * @param contrasena
	 * @param nombre
	 * @param apellidos
	 * @param username
	 * @param email
	 */
	public Usuario(Long id, String contrasena, String nombre, String apellidos, String username, String email) {
		super();
		this.id = id;
		this.contrasena = contrasena;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.username = username;
		this.email = email;
	}
	
	// Getters y setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "EjemplarPrestado")
	public List<EjemplarPresta> getEjemplarPrestado() {
		return ejemplarPrestado;
	}

	public void setEjemplarPrestado(List<EjemplarPresta> ejemplarPrestado) {
		this.ejemplarPrestado = ejemplarPrestado;
	}
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Ejemplar")
	public List<Ejemplar> getEjemplar() {
		return ejemplar;
	}

	public void setEjemplar(List<Ejemplar> ejemplar) {
		this.ejemplar = ejemplar;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", contrasena=" + contrasena + ", nombre=" + nombre + ", apellidos=" + apellidos
				+ ", username=" + username + ", email=" + email + "]";
	}
	
}
