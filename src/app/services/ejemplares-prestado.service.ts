import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjemplaresPrestado } from '../models/ejemplares-prestado.model';


const baseUrl = 'https://libro-systems.herokuapp.com/api/ejemplaresPrestados';

@Injectable({
  providedIn: 'root'
})
export class EjemplaresPrestadoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EjemplaresPrestado[]> {
    return this.http.get<EjemplaresPrestado[]>(baseUrl);
  }

  getID(id: any): Observable<EjemplaresPrestado> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  //Busca por id de usuario
  getUsuario(usuario: any): Observable<EjemplaresPrestado> {
    return this.http.get(`${baseUrl}/usuario/${usuario}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
