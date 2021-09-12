import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibroListComponent} from "./componentsLibro/libro-list/libro-list.component";
import {LibroDetailsComponent} from "./componentsLibro/libro-details/libro-details.component";
import {AddLibroComponent} from "./componentsLibro/add-libro/add-libro.component";
import { MostrarEditorialComponent } from './components-Editorial/mostrar-editorial/mostrar-editorial.component';
import { PrincipalEditorialComponent } from './components-Editorial/principal-editorial/principal-editorial.component';
import { UpdateEditorialComponent } from './components-Editorial/update-editorial/update-editorial.component';
import { CrearEditorialComponent } from './components-Editorial/crear-editorial/crear-editorial.component';
import {LibroPrestadoListComponent} from "./componentsLibroPrestado/libro-prestado-list/libro-prestado-list.component";
import {LibroPrestadoDetailsComponent} from "./componentsLibroPrestado/libro-prestado-details/libro-prestado-details.component";
import {BuscarLibroListComponent} from "./componentsBuscarLibro/buscar-libro-list/buscar-libro-list.component";
import {BuscarLibroDetailsComponent} from "./componentsBuscarLibro/buscar-libro-details/buscar-libro-details.component";
import {UpdateLibroComponent} from "./componentsLibro/update-libro/update-libro.component";
import { ComponentContactoComponent } from './component-contacto/component-contacto.component';
import { ComponentRegistrarseComponent } from './component-registrarse/component-registrarse.component';

const routes: Routes = [
 /* {
    path: ''
  },*/
  {
    path: 'libros', component: LibroListComponent
  },
  {
    path: 'libros/:id', component: LibroDetailsComponent
  },
  {
    path: 'addLibro', component: AddLibroComponent
  },
  {
    path: 'libros/update/:id', component: UpdateLibroComponent
  },
  {
    path: 'editoriales', component:PrincipalEditorialComponent
  },
  {
    path:'editoriales/:id', component:MostrarEditorialComponent
  },
  {
    path:'editoriales/actualizar/:id', component:UpdateEditorialComponent
  },
  {
    path:'addEditorial', component:CrearEditorialComponent
  },
  {
    path: 'libros-prestados', component: LibroPrestadoListComponent
  },
  {
    path: 'libros-prestados/:id', component: LibroPrestadoDetailsComponent
  },
  {
    path: 'libros-encontrados', component: BuscarLibroListComponent
  },
  {
    path: 'libros-encontrados/:id', component: BuscarLibroDetailsComponent
  },
  {
    path: 'contacts/:id', component: ComponentContactoComponent
  },
  {
    path: 'registrarse', component: ComponentRegistrarseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
