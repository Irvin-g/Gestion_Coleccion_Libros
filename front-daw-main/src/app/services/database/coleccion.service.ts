import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Coleccion } from 'src/app/interfaces/coleccion.interface';

@Injectable({
  providedIn: 'root'
})
export class ColeccionService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
  ) { this.handleError = httpErrorHandler.createHandleError('ColeccionService'); }

  getUrl(): string {
    return `${environment.apiUrl}/coleccion/`;
  }

  obtenerColecciones() : Observable<object> {
    return this.http
        .get<Coleccion[]>(this.getUrl() + 'obtenerColecciones')
        .pipe(catchError(this.handleError('obtenerColecciones', [])));
  }

  obtenerColeccionPorId(idColeccion: string) : Observable<object> {
    return this.http
        .get<Coleccion>(this.getUrl() + 'obtenerColeccionPorId/' + idColeccion )
        .pipe(catchError(this.handleError('obtenerColeccionPorId', [])));
  }

  crearColeccion(coleccion: Coleccion) : Observable<object> {
    return this.http
        .post<object>(this.getUrl() + 'crearColeccion', coleccion )
        .pipe(catchError(this.handleError('crearColeccion', [])));
  }

  editarColeccion(coleccion: Coleccion) : Observable<object> {
    return this.http
        .put<object>(this.getUrl() + 'editarColeccion', coleccion )
        .pipe(catchError(this.handleError('editarColeccion', [])));
  }

  disableColeccion(idColeccion: string) : Observable<object> {
    return this.http
        .delete<Coleccion>(this.getUrl() + 'disableColeccion/' + idColeccion )
        .pipe(catchError(this.handleError('disableColeccion', [])));
  }

}

