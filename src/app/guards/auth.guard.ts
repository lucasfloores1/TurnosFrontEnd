import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor( 
    private loginService : LoginService,
    private notiService : NotificationService,
    private router : Router 
  ){}

  canActivateChild(): Observable<boolean> | boolean {
    if ((localStorage.getItem('user') != null || localStorage.getItem('user') != undefined) && (localStorage.getItem('token') != null || localStorage.getItem('token') != undefined)) {
      return this.loginService.validateToken().pipe(
        map(response => {
          if (response.valid) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', response.user.id);
            return true;
          } else {
            this.handleUnauthorizedAccess();
            return false;
          }
        }),
        catchError(error => {
          this.notiService.ErrorNotification("Tu sesión expiró")
          this.handleUnauthorizedAccess();
          return of(false);
        })
      );
    } else {
      console.log("debes iniciar sesion");
      this.handleUnauthorizedAccess();
      return false;
    }
  }

  private handleUnauthorizedAccess(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  
}
