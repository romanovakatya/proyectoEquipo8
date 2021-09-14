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
import { RegisterComponent } from './component-register/register.component';
import {PrincipalEditorialComponent} from "./components-Editorial/principal-editorial/principal-editorial.component";
import {MostrarEditorialComponent} from "./components-Editorial/mostrar-editorial/mostrar-editorial.component";
import {CrearEditorialComponent} from "./components-Editorial/crear-editorial/crear-editorial.component";
import {UpdateEditorialComponent} from "./components-Editorial/update-editorial/update-editorial.component";
import { LibroPrestadoListComponent } from './componentsLibroPrestado/libro-prestado-list/libro-prestado-list.component';
import { LibroPrestadoDetailsComponent } from './componentsLibroPrestado/libro-prestado-details/libro-prestado-details.component';
import { BuscarLibroListComponent } from './componentsBuscarLibro/buscar-libro-list/buscar-libro-list.component';
import { BuscarLibroDetailsComponent } from './componentsBuscarLibro/buscar-libro-details/buscar-libro-details.component';
import { UpdateLibroComponent } from './componentsLibro/update-libro/update-libro.component';
import { ContactoComponent } from './component-contacto/contacto.component';
import { ClipboardModule } from 'ngx-clipboard';
import { LoginComponent } from './component-login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddLibroComponent,
    LibroDetailsComponent,
    LibroListComponent,
    LogoutComponent,
    InicioComponent,
    RegisterComponent,
    PrincipalEditorialComponent,
    MostrarEditorialComponent,
    CrearEditorialComponent,
    UpdateEditorialComponent,
    LibroPrestadoListComponent,
    LibroPrestadoDetailsComponent,
    BuscarLibroListComponent,
    BuscarLibroDetailsComponent,
    UpdateLibroComponent,
    ContactoComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }