import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private myAppUrl = 'https://localhost:44309/';
  private myApiURL = 'api/comentario/';

  constructor(private http: HttpClient) {

  }

  getListComentarios(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiURL);
  }

  deleteComentario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiURL + id);
  }

  getComentario(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiURL + id);
  }

  saveComentario(comentario: Comentario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiURL, comentario);
  }

  updateComentario(id: number, comentario: Comentario): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiURL + id, comentario);
  }
}
