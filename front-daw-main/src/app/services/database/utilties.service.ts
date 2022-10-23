import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
  ) { this.handleError = httpErrorHandler.createHandleError('UtilitiesService'); }

  getUrl(): string {
    // return `${this.settingsService.getAPISetting('url')}utilities/`;
    return 'url';
  }

  getCountries() : Observable<object> {
    return this.http
        .get<object>(this.getUrl() + `getCountries`)
        .pipe(catchError(this.handleError('getCountries', [])));
  }

  getStates() : Observable<object> {
    return this.http
        .get<object>(this.getUrl() + `getStates`)
        .pipe(catchError(this.handleError('getStates', [])));
  }

  getCities(state_id: number) : Observable<object> {
    return this.http
        .get<object>(this.getUrl() + `getCities/${state_id} `)
        .pipe(catchError(this.handleError('getCities', [])));
  }
  
}

