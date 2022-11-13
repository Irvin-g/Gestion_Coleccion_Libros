import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosdeseadosService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
  ) { this.handleError = httpErrorHandler.createHandleError('LibrosdeseadosService'); }

  getUrl(): string {
    return `${environment.apiUrl}/librosdeseados/`;
  }

  obtenerLibrosDeseados(idUsuario: number) : Observable<object> {
    return this.http
        .get<object>(this.getUrl() + 'obtenerLibrosDeseados/' + idUsuario )
        .pipe(catchError(this.handleError('obtenerLibrosDeseados', [])));
  }

  nuevoLibroDeseado(libro: any) : Observable<object> {
    return this.http
        .post<object>(this.getUrl() + 'nuevoLibroDeseado', libro )
        .pipe(catchError(this.handleError('nuevoLibroDeseado', [])));
  }

  eliminarLibroDeseado(idLibroDeseado: string) : Observable<object> {
    return this.http
        .delete<object>(this.getUrl() + 'eliminarLibroDeseado/' + idLibroDeseado )
        .pipe(catchError(this.handleError('eliminarLibroDeseado', [])));
  }

  obtenerComentariosLibro(idLibro: number) : Observable<object> {
    return this.http
        .get<object>(this.getUrl() + 'obtenerComentariosLibro/' + idLibro )
        .pipe(catchError(this.handleError('obtenerComentariosLibro', [])));
  }

  nuevoComentario(libro: any) : Observable<object> {
    return this.http
        .post<object>(this.getUrl() + 'nuevoComentario', libro )
        .pipe(catchError(this.handleError('nuevoComentario', [])));
  }


}
