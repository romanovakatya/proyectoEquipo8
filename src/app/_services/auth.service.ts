import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'https://libro-systems.herokuapp.com/';
//const AUTH_API = 'http://localhost:8181/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  //para loguearse a nuestra API con su usuario y password
  login(username: string, password: string): Observable<any> {
    console.log('login');
    return this.http.post(AUTH_API + 'login', {
     'username': username,
     'contrasena': password
    }, httpOptions);
  }

  //para poder registrarse a la app,
  //cualquiera persona puede hacerlo porque app funciona dentro de la intranet,/*api/*/
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'api/usuarios', {
      'contrasena': password,
      'nombre': username,
      'apellidos': null,
      'username': username,
      'email': email,
      'comments': password
    }, httpOptions);
  }
}
