package app.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ejemplares_prestados")
public class EjemplarPresta {

	// atributos de la entidad venta,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "id_ejemplar")
	Ejemplar ejemplar;

	@ManyToOne
	@JoinColumn(name = "id_usuario_prestamo")
	Usuario usuario_prestamo;

	@Column(name = "inicio_prestamo")
	private Date inicio_prestamo;

	@Column(name = "fin_prestamo")
	private Date fin_prestamo;

	// constructores,
	// por defecto,
	public EjemplarPresta() {

	}

	// con todos los atributos,
	public EjemplarPresta(Long id, Ejemplar ejemplar, Usuario usuario_prestamo, Date inicio_prestamo,
			Date fin_prestamo) {
		super();
		this.id = id;
		this.ejemplar = ejemplar;
		this.usuario_prestamo = usuario_prestamo;
		this.inicio_prestamo = inicio_prestamo;
		this.fin_prestamo = fin_prestamo;
	}


	//los getters y setters,
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Ejemplar getEjemplar() {
		return ejemplar;
	}

	public void setEjemplar(Ejemplar ejemplar) {
		this.ejemplar = ejemplar;
	}

	public Usuario getUsuario_prestamo() {
		return usuario_prestamo;
	}

	public void setUsuario_prestamo(Usuario usuario_prestamo) {
		this.usuario_prestamo = usuario_prestamo;
	}

	public Date getInicio_prestamo() {
		return inicio_prestamo;
	}

	public void setInicio_prestamo(Date inicio_prestamo) {
		this.inicio_prestamo = inicio_prestamo;
	}

	public Date getFin_prestamo() {
		return fin_prestamo;
	}

	public void setFin_prestamo(Date fin_prestamo) {
		this.fin_prestamo = fin_prestamo;
	}

	//para mostrar toda la información sobre un ejemplar prestado,
	@Override
	public String toString() {
		return "EjemplarPresta [id=" + id + ", ejemplar=" + ejemplar + ", usuario_prestamo=" + usuario_prestamo
				+ ", inicio_prestamo=" + inicio_prestamo + ", fin_prestamo=" + fin_prestamo + "]";
	}

}
