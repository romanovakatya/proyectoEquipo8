import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-update-editorial',
  templateUrl: './update-editorial.component.html',
  styleUrls: ['./update-editorial.component.scss']
})
export class UpdateEditorialComponent implements OnInit {

  currentEditorial: Editorial = {
    nombre: '',
    direccion: '',
    pagina_web:''
  }

  id: number = -1;

  editorial:any=null;

  constructor(private editorialService: EditorialService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEditorial(this.id);
  }

  getEditorial(id: number){


    this.editorialService.getID(id)
    .subscribe(
      result =>{
        this.editorial = result;
        console.log(this.editorial);
      },
      error =>{
        console.log("Problemas");
        console.log(error)
      }
      );
  }

  updateEditorial(){
    this.editorialService.update(this.id, this.currentEditorial)
    .subscribe(
      response => {
        console.log(response);
        //this.message = response.message ? response.message : 'This tutorial was updated successfully!';
      },
      error => {
        console.log(error);
      });
  }


}
