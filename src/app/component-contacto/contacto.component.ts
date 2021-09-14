import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  copiado = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  copiar(){
    if(this.copiado){
      this.copiado=false;
    }else{
      this.copiado=true;
    }
  }

}
