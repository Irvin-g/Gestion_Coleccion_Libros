import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Libro, LibrosView } from 'src/app/interfaces/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
  ) { this.handleError = httpErrorHandler.createHandleError('LibrosService'); }

  getUrl(): string {
    return `${environment.apiUrl}/libros/`;
  }

  obtenerLibros() : Observable<object> {
    return this.http
        .get<Libro[]>(this.getUrl() + 'obtenerLibros')
        .pipe(catchError(this.handleError('obtenerLibros', [])));
  }

  obtenerLibrosViewTabla() : Observable<object> {
    return this.http
        .get<LibrosView[]>(this.getUrl() + 'obtenerLibrosViewTabla')
        .pipe(catchError(this.handleError('obtenerLibrosViewTabla', [])));
  }

  obtenerLibroPorId(idAutor: string) : Observable<object> {
    return this.http
        .get<Libro>(this.getUrl() + 'obtenerLibroPorId/' + idAutor )
        .pipe(catchError(this.handleError('obtenerLibroPorId', [])));
  }

  crearLibro(libro: Libro) : Observable<object> {
    return this.http
        .post<object>(this.getUrl() + 'crearLibro', libro )
        .pipe(catchError(this.handleError('crearLibro', [])));
  }

  editarLibro(libro: Libro) : Observable<object> {
    return this.http
        .put<object>(this.getUrl() + 'editarLibro', libro )
        .pipe(catchError(this.handleError('editarLibro', [])));
  }

  disableLibro(idLibro: string) : Observable<object> {
    return this.http
        .delete<object>(this.getUrl() + 'disableLibro/' + idLibro )
        .pipe(catchError(this.handleError('disableLibro', [])));
  }

}

