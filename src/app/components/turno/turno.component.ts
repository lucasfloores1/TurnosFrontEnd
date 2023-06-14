import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Turno } from 'src/app/model/Turno';
import { LoginService } from 'src/app/services/login.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent implements OnInit{

  turnos! : Turno[]
  searchTurno! : string;

  constructor( 
    private router : Router,
    private loginService : LoginService,
    private turnoService : TurnoService
  ){}

  ngOnInit(): void {

    this.turnoService.getTurnos( localStorage.getItem('user') ).subscribe( response => {
      this.turnos = response;
      console.log(response);
    });
    
    
  }

}
