package app.dto;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "editoriales")
public class Editorial {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // busca ultimo valor e incrementa desde id final de db
	private Long id;
	@Column(name = "nombre") // no hace falta si se llama igual
	private String nombre;
	@Column(name = "direccion") // no hace falta si se llama igual
	private String direccion;
	@Column(name = "pagina_web") // no hace falta si se llama igual
	private String pagina_web;

	@OneToMany
	@JoinColumn(name = "id")
	private List<Libro> libro;

	public Editorial() {

	}

	public Editorial(Long id, String nombre, String direccion, String pagina_web) {
		this.id = id;
		this.nombre = nombre;
		this.direccion = direccion;
		this.pagina_web = pagina_web;
	}

	// los getters y setters,
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getPagina_web() {
		return pagina_web;
	}

	public void setPagina_web(String pagina_web) {
		this.pagina_web = pagina_web;
	}
	
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Libro")
	public List<Libro> getLibro() {
		return libro;
	}

	public void setLibro(List<Libro> libro) {
		this.libro = libro;
	}

	@Override
	public String toString() {
		return "Editorial [id=" + id + ", nombre=" + nombre + ", direccion=" + direccion + ", pagina_web=" + pagina_web
				+ "]";
	}

}
