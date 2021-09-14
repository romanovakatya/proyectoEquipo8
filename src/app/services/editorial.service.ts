import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial.model';

const baseUrl = 'https://libro-systems.herokuapp.com/api/editoriales';

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

  getNombre(nombre: any): Observable<Editorial> {
    return this.http.get(`${baseUrl}/nombre/${nombre}`);
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