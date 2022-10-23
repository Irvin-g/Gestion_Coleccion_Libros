import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const usuario = localStorage.getItem('usuario');

    if (usuario === null) {
      localStorage.clear();
      this.router.navigate(["/login"]);
      return true;
    } else {
      return true;
    }
  }
  
}
