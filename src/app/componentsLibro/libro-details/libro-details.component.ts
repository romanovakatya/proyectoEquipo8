import { Component, OnInit } from '@angular/core';
import {Ejemplar} from "../../models/ejemplar.model";
import {EjemplarService} from "../../services/ejemplar.service";
import {TokenStorageService} from "../../_services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-libro-details',
  templateUrl: './libro-details.component.html',
  styleUrls: ['./libro-details.component.scss']
})
export class LibroDetailsComponent implements OnInit {

  currentLibro: Ejemplar = {

    isbn: '',
    statusLibre: true,
    numeroPaginas: 0,
    portada: '',
    propietario: '',
    libro: ''
  };

  username = '';
  id: number = -1;
  message = '';

  constructor(private ejemplarService: EjemplarService,
              private tokenStorage: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.username = this.tokenStorage.getUser();
    this.id = this.route.snapshot.params.id;
    this.message = '';
    this.getLibro(this.id);
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
}
