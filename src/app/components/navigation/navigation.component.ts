import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showToolbar : boolean = true;

  showNavigation : boolean = true;

  currentRoute! : string 

  @ViewChild('drawer') drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 1000px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        switch(this.currentRoute ){
          case '/login' :
            this.showToolbar = false
            break;
          case '/register' :
            this.showToolbar = false
            break;
          case '/about' :
            this.showNavigation = false;
            this.showToolbar = false;
            break;
          case '/' :
            this.showNavigation = false;
            this.showToolbar = false;           
            break;    
          default :
            this.showToolbar = true;
            break;
        }
      }
    });
    
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router : Router,
    private loginService : LoginService,
  ) {}

  logout( nav : boolean ){
    this.loginService.logout();
    if (nav){
      this.drawer.toggle();
    }
    this.router.navigate(['login'])
  }

}
