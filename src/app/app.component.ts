import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'TurnosFrontEnd';

  @ViewChild('drawer') drawer! : MatDrawer;
  isDrawerOpen: boolean = false;
  
  isLoggedIn : boolean 

  constructor(private loginService : LoginService, private router : Router){
    this.isLoggedIn = this.loginService.isLoggedIn()
  }

  ngOnInit(): void {
    this.loginService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  toggleDrawer() {
    this.drawer.toggle();
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer() {
    this.drawer.close();
    this.isDrawerOpen = false;
  }

  logout() {
    this.loginService.logout();
    this.closeDrawer(); // Cerrar el drawer al hacer clic en "Cerrar sesión"
    this.router.navigate(['login']);
  }
}
