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

  getStarted : boolean = false;

  title = 'TurnosFrontEnd';
  

  constructor(){
  }

  ngOnInit(): void {
  }
}
