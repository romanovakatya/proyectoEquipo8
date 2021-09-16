import {Component, OnInit} from '@angular/core';
import {Ejemplar} from "../../models/ejemplar.model";
import {EjemplarService} from "../../services/ejemplar.service";
import {TokenStorageService} from "../../_services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-libro',
  templateUrl: './update-libro.component.html',
  styleUrls: ['./update-libro.component.scss']
})
export class UpdateLibroComponent implements OnInit {

  currentLibro: Ejemplar = {
    isbn: '',
    statusLibre: true,
    numeroPaginas: 0,
    portada: '',
    propietario: '',
    libro: ''
  };

  id: number = -1;
  message = '';

  constructor(private ejemplarService: EjemplarService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.message = '';
    this.getLibro(this.id);
    console.log("cur id ejemplar" + this.id);
  }

  getLibro(id: number): void {
    this.ejemplarService.get(id)
      .subscribe(
        data => {
          this.currentLibro = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateLibro(): void {
    this.message = '';
    console.log("id ejemplar en update" + this.currentLibro.id);
    this.ejemplarService.update(this.currentLibro.id, this.currentLibro)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ?
            response.message : "Tu ejemplar ha sido actualizado correctamente!";
        },
        error => {
          console.log("ejemplar no se actualiza");
          console.log(error);
        }
      );
  }
}
