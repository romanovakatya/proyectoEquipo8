import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ejemplar} from "../models/ejemplar.model";

//const baseUrl = 'https://libro-systems.herokuapp.com/api/ejemplares';
const baseUrl = 'http://localhost:8181/api/ejemplares';

@Injectable({
  providedIn: 'root'
})
export class EjemplarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ejemplar[]> {
    return this.http.get<Ejemplar[]>(baseUrl);
  }

  get(id: any): Observable<Ejemplar> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  findByISBN(isbn: any): Observable<Ejemplar[]> {
    return this.http.get<Ejemplar[]>(`${baseUrl}/isbn/${isbn}`);
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
