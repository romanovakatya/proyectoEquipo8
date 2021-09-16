import { Component, OnInit } from '@angular/core';
import {EjemplarService} from "../../services/ejemplar.service";
import {Ejemplar} from "../../models/ejemplar.model";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.scss']
})
export class LibroListComponent implements OnInit {

  misLibros?: Ejemplar[];

  currentLibro: Ejemplar = {};
  currentIndex = -1;

  username = '';
  isbn = '';
  titulo = '';
  autor = '';

  constructor(private ejemplarService: EjemplarService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.username = this.tokenStorage.getUser();

    this.retrieveMisLibros();
  }


  retrieveMisLibros(): void {

    this.ejemplarService.findByUsername(this.username)
      .subscribe(
        data => {
          this.misLibros = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  searchIsbn(): void {
    this.currentLibro = {};
    this.currentIndex = -1;

    this.ejemplarService.findByISBN(this.isbn)
      .subscribe(
        data => {
          this.misLibros = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
