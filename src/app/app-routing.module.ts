import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibroListComponent} from "./componentsLibro/libro-list/libro-list.component";
import {LibroDetailsComponent} from "./componentsLibro/libro-details/libro-details.component";
import {AddLibroComponent} from "./componentsLibro/add-libro/add-libro.component";
import { MostrarEditorialComponent } from './components-Editorial/mostrar-editorial/mostrar-editorial.component';
import { PrincipalEditorialComponent } from './components-Editorial/principal-editorial/principal-editorial.component';
import { UpdateEditorialComponent } from './components-Editorial/update-editorial/update-editorial.component';
import { CrearEditorialComponent } from './components-Editorial/crear-editorial/crear-editorial.component';

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
    path: 'editoriales', component:PrincipalEditorialComponent
  },
  {
    path:'editorial/:id', component:MostrarEditorialComponent
  },
  {
    path:'actualizar/editorial/:id', component:UpdateEditorialComponent
  },
  {
    path:'editorial', component:CrearEditorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
