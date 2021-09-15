import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';


//const baseUrl = 'https://libro-systems.herokuapp.com/api/libros';
const baseUrl = 'http://localhost:8181/api/libros';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(baseUrl);
  }

  getID(id: any): Observable<Libro> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getAutor(autor: any): Observable<Libro> {
    return this.http.get(`${baseUrl}/autor/${autor}`);
  }

  getTitulo(titulo: any): Observable<Libro> {
    return this.http.get(`${baseUrl}/titulo/${titulo}`);
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
