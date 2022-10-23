import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  url_split: any;

  split_var: any;

  permissions_url: any;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    const array_url: string[] = [];
    const array_url_drive: string[] = [];
    array_url_drive.push('/api/file');

      if ( localStorage.getItem('token') ) {
        // If it is not Google Drive
        req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`) });
      }

      req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
      req = req.clone({
        headers: req.headers.set(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept',
        ),
      });

      // let index_drive = 0;
      // array_url_drive.map((item, index) => {
      //   if (index_drive < 0) {
      //     index_drive = req.url.indexOf(item);
      //   }
      // });

      // if (index_drive < 0) {
      //   req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      //   req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      //   req = req.clone({ headers: req.headers.set('Set-Cookie', 'HttpOnly;Secure;SameSite=None') });
      // } else {
      //   if (req.method !== 'POST') {
      //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      //     req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      //     req = req.clone({ headers: req.headers.set('Set-Cookie', 'HttpOnly;Secure;SameSite=None') });
      //   }
      // }
    

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // 401 UNAUTHORIZED
        if (error && error.status === 401) {
          console.log('ERROR 401 UNAUTHORIZED');
        }
        const err = error.error.message || error.statusText;
        return throwError(error);
      }),
    );
  }
}
