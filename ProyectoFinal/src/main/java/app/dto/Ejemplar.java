package app.dto;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "ejemplares")
public class Ejemplar {
	
	//atributos de la entidad ejemplar,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "isbn")
	private String isbn;
	
	@Column(name = "status_libre")
	private boolean statusLibre;
	
	@Column(name = "numero_paginas")
	private int numeroPaginas;
	
	@Column(name = "portada")
	private String portada;
	
	//para claves foráneas,
	@ManyToOne
	@JoinColumn(name = "id_propietario")
	Usuario propietario;

	@ManyToOne
	@JoinColumn(name = "id_libro")
	Libro libro;
	
	//para tabla many to many,
	
	//es correcto?????
	@OneToMany()
	@JoinColumn(name="id")
	private List<EjemplarPresta> ejemplarPrestado;


	//constructores,
	//por defecto,
	public Ejemplar() {
		
	}

	//con todos los atributos,
	public Ejemplar(Long id, String isbn, boolean statusLibre, int numeroPaginas, String portada,
			Usuario propietario, Libro libro) {
		super();
		this.id = id;
		this.isbn = isbn;
		this.statusLibre = statusLibre;
		this.numeroPaginas = numeroPaginas;
		this.portada = portada;
		this.propietario = propietario;
		this.libro = libro;
	}

	
	//los getters y setters,
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	
	public boolean isStatusLibre() {
		return statusLibre;
	}

	
	public void setStatusLibre(boolean statusLibre) {
		this.statusLibre = statusLibre;
	}

	
	public int getNumeroPaginas() {
		return numeroPaginas;
	}

	
	public void setNumeroPaginas(int numeroPaginas) {
		this.numeroPaginas = numeroPaginas;
	}

	
	public String getPortada() {
		return portada;
	}

	
	public void setPortada(String portada) {
		this.portada = portada;
	}

	//claves foráneas,
	
	public Usuario getPropietario() {
		return propietario;
	}

	public void setPropietario(Usuario propietario) {
		this.propietario = propietario;
	}

	public Libro getLibro() {
		return libro;
	}

	public void setLibro(Libro libro) {
		this.libro = libro;
	}
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "EjemplarPresta")
	public List<EjemplarPresta> getEjemplarPrestado() {
		return ejemplarPrestado;
	}

	public void setEjemplarPrestado(List<EjemplarPresta> ejemplarPrestado) {
		this.ejemplarPrestado = ejemplarPrestado;
	}
	
		//para mostrar los datos de un ejemplar,
	@Override
	public String toString() {
		return "Ejemplar [id=" + id + ", isbn=" + isbn + ", statusLibre=" + statusLibre + ", numeroPaginas="
				+ numeroPaginas + ", portada=" + portada + "]";
	}		
}
