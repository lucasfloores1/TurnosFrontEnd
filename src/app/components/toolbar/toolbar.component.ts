import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

  icono: string = 'home';
  redireccion: string = '/home';

  
  constructor( private router : Router, private loginService : LoginService ){}

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        // Actualizar el valor del icono y la redirección según la URL actual
        this.actualizarIconoYRedireccion(url);
      }
    });
    
  }

  actualizarIconoYRedireccion(url: string) {
    if (url.includes('/home')) {
      this.icono = 'logout';
      this.redireccion = '/login';
    } else {
      this.icono = 'home';
      this.redireccion = '/home';
    }
  }

  logout(){

    this.loginService.logout()

  }

}
