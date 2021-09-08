package app.dto;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "libros")
public class Libro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // busca ultimo valor e incrementa desde id final de db
	private Long id;
	@Column(name = "autor") // no hace falta si se llama igual
	private String autor;
	@Column(name = "titulo") // no hace falta si se llama igual
	private String titulo;
	@Column(name = "descripcion") // no hace falta si se llama igual
	private String descripcion;
	
	@ManyToOne
	@JoinColumn(name = "editorial")
	private Editorial editorial;
	
	@OneToMany
	@JoinColumn(name = "id")
	private List<Ejemplar> ejemplar;
	
	public Libro() {
		
	}
	
	public Libro(Long id,String autor,String titulo,String descripcion,Editorial editorial) {
		this.id = id;
		this.autor=autor;
		this.titulo=titulo;
		this.descripcion=descripcion;
		this.editorial=editorial;
	}
	
	
	//los getters y setters,
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Editorial getEditorial() {
		return editorial;
	}

	public void setEditorial(Editorial editorial) {
		this.editorial = editorial;
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
		return "Libro [id=" + id + ", autor=" + autor + ", titulo=" + titulo + ", descripcion=" + descripcion
				+ ", editorial=" + editorial + "]";
	}
	
	
	
}
