import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

//const baseUrl = 'https://libro-systems.herokuapp.com/api/usuarios';
const baseUrl = 'http://localhost:8181/api/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<Usuario> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findUserByUsername(username: string): Observable<Usuario>{
    return this.http.get(`${baseUrl}/username/${username}`);
  }

}
