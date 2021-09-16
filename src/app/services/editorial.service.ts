import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial.model';

//const baseUrl = 'https://libro-systems.herokuapp.com/api/editoriales';
const baseUrl = 'http://localhost:8181/api/editoriales';

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'PUT',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(baseUrl);
  }

  getID(id: any): Observable<Editorial> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getNombre(nombre: any): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(`${baseUrl}/nombre/${nombre}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data, httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
