import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-mostrar-editorial',
  templateUrl: './mostrar-editorial.component.html',
  styleUrls: ['./mostrar-editorial.component.scss']
})
export class MostrarEditorialComponent implements OnInit {

  id:any=0;

  editorial:any=null;

  constructor(private editorialService: EditorialService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEditorial();
  }

  getEditorial(){
    this.id=this.route.snapshot.paramMap.get("id");

    this.editorialService.getID(this.id)
    .subscribe(
      result =>{
        this.editorial = result;
        console.log(this.editorial);
      },
      error =>{
        console.log("Problemas");
      }
      );
  }

}
