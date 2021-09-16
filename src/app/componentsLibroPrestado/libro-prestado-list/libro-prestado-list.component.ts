import { Component, OnInit } from '@angular/core';
import {EjemplaresPrestadoService} from "../../services/ejemplares-prestado.service";
import {TokenStorageService} from "../../_services/token-storage.service";
import {EjemplaresPrestado} from "../../models/ejemplares-prestado.model";
import {UsuarioService} from "../../services/usuario.service";
import {Usuario} from "../../models/usuario.model";

@Component({
  selector: 'app-libro-prestado-list',
  templateUrl: './libro-prestado-list.component.html',
  styleUrls: ['./libro-prestado-list.component.scss']
})
export class LibroPrestadoListComponent implements OnInit {

  ejemplaresPrestados?: EjemplaresPrestado[];
  currentPrestatario?: Usuario = {};
  username = '';
  userId = 0;
  isbn = '';

  constructor(private ejemplarPrestadoService: EjemplaresPrestadoService,
     private tokenStorage: TokenStorageService,
              private userService: UsuarioService) { }

  ngOnInit(): void {

    this.username = this.tokenStorage.getUser();

    this.getPrestatario(this.username);

  }

  getPrestatario(username: string): void{
    this.userService.findUserByUsername(username)
      .subscribe(
        data => {
          this.currentPrestatario = data;

          console.log(data);

          this.userId = data.id;

          this.retrieveEjemplaresPrestados(this.userId);
        },
        error => {
          console.log(error);
        }
      );
  }

  retrieveEjemplaresPrestados(userId: number): void {

    this.ejemplarPrestadoService.findByUsuarioPrestatario(userId)
      .subscribe(
        data => {
          this.ejemplaresPrestados = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }


 /* searchIsbn(): void {
    this.currentEjemplarPrestado = {};
    this.currentIndex = -1;

    this.ejemplarPrestadoService.findByISBN(this.isbn)
      .subscribe(
        data => {
          this.ejemplares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }*/
}
