import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
//import { CanActivate, Router } from '@angular/router';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
    private _router: Router) { }
  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this._router.navigate(['/login']);
    return true;
  }
  */
  
    canActivate(): boolean {
      if (this._authService.loggedIn()) {
        return true;
      }
      this._router.navigate(['/login']);
      return false;
    }
  
}
