import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibroListComponent} from "./componentsLibro/libro-list/libro-list.component";
import {LibroDetailsComponent} from "./componentsLibro/libro-details/libro-details.component";
import {AddLibroComponent} from "./componentsLibro/add-libro/add-libro.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
