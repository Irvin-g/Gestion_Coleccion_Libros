import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { environment } from '../../../environments/environment';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private router: Router,
    private ngZone: NgZone
  ) { this.handleError = httpErrorHandler.createHandleError('companiesService'); }

  getUrl(): string {
    return `${environment.apiUrl}/login/`;
  }

  loginGoogle(model: any) : Observable<object> {
    return this.http
        .post<object>(this.getUrl() + 'loginGoogle', model )
        .pipe(catchError(this.handleError('loginGoogle', [])));
  }

  logOut(){
    localStorage.clear();

    this.ngZone.run(() => {
      this.router.navigate(['/login']).then(() => window.location.reload());
    });
  }

}
