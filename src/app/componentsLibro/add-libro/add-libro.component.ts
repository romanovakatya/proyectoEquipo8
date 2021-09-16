import { Component, OnInit } from '@angular/core';
import {Ejemplar} from "../../models/ejemplar.model";
import {EjemplarService} from "../../services/ejemplar.service";

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.scss']
})
export class AddLibroComponent implements OnInit {

 ejemplar: Ejemplar = {

    isbn: '',
    statusLibre: true,
    numeroPaginas: 0,
    portada: '',
    propietario: '',
    libro: ''
  };

  submitted = false;

  constructor(private libroService: EjemplarService) { }

  ngOnInit(): void {
  }

  saveLibro(): void{
    const data = {
      isbn: this.ejemplar.isbn,
      statusLibre: this.ejemplar.statusLibre,
      numeroPaginas: this.ejemplar.numeroPaginas,
      portada: this.ejemplar.portada,
      propietario: this.ejemplar.propietario,
      libro: this.ejemplar.libro

    };

    this.libroService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newLibro(): void{
    this.submitted = false;
    this.ejemplar = {
      isbn: '',
      statusLibre: true,
      numeroPaginas: 0,
      portada: '',
      propietario: '',
      libro: ''
    }
  }

}
