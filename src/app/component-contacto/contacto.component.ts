import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-component-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  copiado = false;

  usuario:any=null;

  id:any=0;

  constructor(private usuarioService: UsuarioService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarUsuario();
  }

  copiar(valor:boolean){
      this.copiado=valor;
  }

  buscarUsuario(){
    this.id=this.route.snapshot.paramMap.get("id");

    this.usuarioService.get(this.id)
    .subscribe(
      result =>{
        this.usuario = result;
        console.log(this.usuario);
      },
      error =>{
        console.log("Problemas");
      }
      );

  }

}
