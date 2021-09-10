import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLibroComponent } from './componentsLibro/add-libro/add-libro.component';
import { LibroDetailsComponent } from './componentsLibro/libro-details/libro-details.component';
import { LibroListComponent } from './componentsLibro/libro-list/libro-list.component';
import { LogoutComponent } from './components/logout/logout.component';
import { InicioComponent } from './component-Inicio/inicio.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    AddLibroComponent,
    LibroDetailsComponent,
    LibroListComponent,
    LogoutComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
