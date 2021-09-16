import { Component, OnInit } from '@angular/core';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-principal-editorial',
  templateUrl: './principal-editorial.component.html',
  styleUrls: ['./principal-editorial.component.scss']
})
export class PrincipalEditorialComponent implements OnInit {

  editoriales?: Editorial [];

  nombre = '';

  editorial: Editorial = {};
  currentIndex = -1;

  constructor(private editorialService: EditorialService) { }

  ngOnInit(): void {
    this.getEditoriales();
  }

  getEditoriales(){
    this.editorialService.getAll()
    .subscribe(
      result =>{
        this.editoriales = result;
        console.log(this.editoriales);
      },
      error =>{
        console.log("Problemas");
        console.log("error");
      }
      );
  }

  getEditorialByName(){

    this.editorial = {};
    this.currentIndex = -1;

    this.editorialService.getNombre(this.nombre)
    .subscribe(
      result =>{
        this.editoriales = result;
      /*  this.editorial = Object.keys(this.editoriales).map((key) => ({type: key, value: this.editoriales[key]}));
        this.editoriales =[{id:this.editorial[0].value,nombre:this.editorial[1].value}];*/
        console.log(this.editoriales);
      },
      error =>{
        console.log("Problemas");
        console.log("error");
      }
      );
  }

}