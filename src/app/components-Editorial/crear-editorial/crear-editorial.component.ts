import { Component, OnInit } from '@angular/core';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-crear-editorial',
  templateUrl: './crear-editorial.component.html',
  styleUrls: ['./crear-editorial.component.scss']
})
export class CrearEditorialComponent implements OnInit {

  currentEditorial: Editorial = {
    nombre: '',
    direccion: '',
    pagina_web:''
  }

  submitted = false;

  constructor(private editorialService: EditorialService) { }

  ngOnInit(): void {

  }

  crearEditorial(){
    const data = {
      nombre: this.currentEditorial.nombre,
      direccion: this.currentEditorial.direccion,
      pagina_web: this.currentEditorial.pagina_web
    };

    this.editorialService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  nuevaEditorial(){
    this.submitted = false;
    this.currentEditorial = {
      nombre: '',
      direccion: '',
      pagina_web: ''
    };
  }

}
