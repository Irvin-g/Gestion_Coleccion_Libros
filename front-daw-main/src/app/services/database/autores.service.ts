import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Autor } from 'src/app/interfaces/autores.interface';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
  ) { this.handleError = httpErrorHandler.createHandleError('AutoresService'); }

  getUrl(): string {
    return `${environment.apiUrl}/autores/`;
  }

  obtenerAutores() : Observable<object> {
    return this.http
        .get<Autor[]>(this.getUrl() + 'obtenerAutores')
        .pipe(catchError(this.handleError('obtenerAutores', [])));
  }

  obtenerAutorPorId(idAutor: string) : Observable<object> {
    return this.http
        .get<Autor>(this.getUrl() + 'obtenerAutorPorId/' + idAutor )
        .pipe(catchError(this.handleError('obtenerAutorPorId', [])));
  }

  crearAutor(autor: Autor) : Observable<object> {
    return this.http
        .post<object>(this.getUrl() + 'crearAutor', autor )
        .pipe(catchError(this.handleError('crearAutor', [])));
  }

  editarAutor(autor: Autor) : Observable<object> {
    return this.http
        .put<object>(this.getUrl() + 'editarAutor', autor )
        .pipe(catchError(this.handleError('editarAutor', [])));
  }

  disableAutor(idAutor: string) : Observable<object> {
    return this.http
        .delete<object>(this.getUrl() + 'disableAutor/' + idAutor )
        .pipe(catchError(this.handleError('disableAutor', [])));
  }

}

