import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    // private settingsService: SettingsService,
    httpErrorHandler: HttpErrorHandler,
  ) { this.handleError = httpErrorHandler.createHandleError('companiesService'); }

  getUrl(): string {
    // return `${this.settingsService.getAPISetting('url')}companies/`;
    return 'url';
  }

  getCompanies() : Observable<object> {
    return this.http
        .get<object>(this.getUrl() )
        .pipe(catchError(this.handleError('getCompanies', [])));
  }

  createCompany(data: any) : Observable<object> {
    return this.http
        .post<object>(this.getUrl() + `createCompany`, data)
        .pipe(catchError(this.handleError('createCompany', [])));
  }

  updateCompany(data: any) : Observable<object> {
    return this.http
        .put<object>(this.getUrl() + `updateCompany`, data)
        .pipe(catchError(this.handleError('updateCompany', [])));
  }

  disableCompany(data: any) : Observable<object> {
    return this.http
        .put<object>(this.getUrl() + `disableCompany`, data)
        .pipe(catchError(this.handleError('disableCompany', [])));
  }


}

