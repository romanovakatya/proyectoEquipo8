import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EditorialService} from 'src/app/services/editorial.service';
import {Editorial} from "../../models/editorial.model";

@Component({
  selector: 'app-mostrar-editorial',
  templateUrl: './mostrar-editorial.component.html',
  styleUrls: ['./mostrar-editorial.component.scss']
})
export class MostrarEditorialComponent implements OnInit {

  id: number = -1;

  editorial: Editorial = {
    nombre: '',
    direccion: '',
    pagina_web: ''
  };

  constructor(private editorialService: EditorialService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEditorial(this.id);
  }

  getEditorial(id: number) {

    this.editorialService.getID(id)
      .subscribe(
        result => {
          this.editorial = result;
          console.log(this.editorial);
        },
        error => {
          console.log("Problemas");
          console.log(error);
        }
      );
  }

}
