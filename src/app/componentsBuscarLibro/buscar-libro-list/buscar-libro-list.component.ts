import { Component, OnInit } from '@angular/core';
import {Ejemplar} from "../../models/ejemplar.model";
import {EjemplarService} from "../../services/ejemplar.service";


@Component({
  selector: 'app-buscar-libro-list',
  templateUrl: './buscar-libro-list.component.html',
  styleUrls: ['./buscar-libro-list.component.scss']
})
export class BuscarLibroListComponent implements OnInit {

  ejemplares?: Ejemplar[];

  currentEjemplar: Ejemplar = {};
  currentIndex = -1;
  isbn = '';

  constructor(private ejemplarService: EjemplarService) { }

  ngOnInit(): void {

    this.retrieveEjemplares();
  }

  retrieveEjemplares(): void {

    this.ejemplarService.findByStatusLibre(true)
      .subscribe(
        data => {
          this.ejemplares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  refreshList(): void {
    this.retrieveEjemplares();
    this.currentEjemplar = {};
    this.currentIndex = -1;
  }

  setActiveEjemplar(ejemplar: Ejemplar, index: number): void {
    this.currentEjemplar = ejemplar;
    this.currentIndex = index;
  }

  searchIsbn(): void {
    this.currentEjemplar = {};
    this.currentIndex = -1;

    this.ejemplarService.findByISBN(this.isbn)
      .subscribe(
        data => {
          this.ejemplares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
