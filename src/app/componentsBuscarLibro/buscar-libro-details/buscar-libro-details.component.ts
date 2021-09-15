import { Component, OnInit } from '@angular/core';
import {EjemplarService} from "../../services/ejemplar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ejemplar} from "../../models/ejemplar.model";

@Component({
  selector: 'app-buscar-libro-details',
  templateUrl: './buscar-libro-details.component.html',
  styleUrls: ['./buscar-libro-details.component.scss']
})
export class BuscarLibroDetailsComponent implements OnInit {

  currentEjemplar: Ejemplar = {

    isbn: '',
    statusLibre: false,
    numeroPaginas: 0,
    portada: '',
    propietario: '',
    libro: ''
  };

  id: number = -1;
  message = '';

  constructor(
    private ejemplarService: EjemplarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.message = '';
    this.getEjemplar(this.id);

  }

  getEjemplar(id: number): void {
    this.ejemplarService.get(id)
      .subscribe(
        data => {
          this.currentEjemplar = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  leer(){
console.log('kyky')
    this.ejemplarService.update(this.id,
      {
        isbn: this.currentEjemplar.isbn,
        statusLibre: false,
        numeroPaginas: this.currentEjemplar.numeroPaginas,
        portada: this.currentEjemplar.portada,
        propietario: this.currentEjemplar.propietario,
        libro: this.currentEjemplar.libro
      });

    this.getEjemplar(this.id);
  }

}
