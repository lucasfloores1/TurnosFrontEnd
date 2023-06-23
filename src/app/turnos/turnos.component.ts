import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/Estudio';
import { Instituto } from 'src/app/model/Instituto';
import { Medico } from 'src/app/model/Medico';
import { ObraSocial } from 'src/app/model/ObraSocial';
import { Paciente } from 'src/app/model/Paciente';
import { Plan } from 'src/app/model/Plan';
import { Turno } from 'src/app/model/Turno';
import { LoginService } from 'src/app/services/login.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit{

  turnos! : Turno[]
  searchTurno! : string;
  medicos! : Medico[];
  medicoId : number = 0
  pacientes! : Paciente[];
  pacienteId : number = 0;
  obrasSociales! : ObraSocial[];
  obraSocialId : number = 0;
  institutos! : Instituto[];
  institutoId : number = 0;
  estudios! : Estudio[];
  estudioId : number = 0;
  planes! : Plan[];
  planId : number = 0;
  filterDate! : Date;
  isCargado : boolean | undefined
  isCancelado : boolean | undefined
  isConfirmado : boolean | undefined
  allowPast : boolean = false;


  constructor( 
    private router : Router,
    private loginService : LoginService,
    private turnoService : TurnoService
  ){}

  ngOnInit(): void {

    this.turnoService.getTurnos( localStorage.getItem('user') ).subscribe( response => {
      this.turnos = response;
      this.loadArrays()
    });
    
  }

  turnoDetail(turno : any){
    this.router.navigate([`turnos/details/${turno.id}`])
  }

  loadArrays() {
    if (this.turnos) {
      const compareItem = (a : any , b : any ) => a.id === b.id;
      this.medicos = this.turnos
        .map(turno => turno.medico)
        .filter((medico, index, array) => array.findIndex(item => compareItem(item, medico)) === index);
  
      this.institutos = this.turnos
        .map(turno => turno.instituto)
        .filter((instituto, index, array) => array.findIndex(item => compareItem(item, instituto)) === index);
  
      this.estudios = this.turnos
        .map(turno => turno.estudio)
        .filter((estudio, index, array) => array.findIndex(item => compareItem(item, estudio)) === index);
  
      this.obrasSociales = this.turnos
        .map(turno => turno.obraSocial)
        .filter((obraSocial, index, array) => array.findIndex(item => compareItem(item, obraSocial)) === index);
  
      this.planes = this.turnos
        .map(turno => turno.plan)
        .filter((plan, index, array) => array.findIndex(item => compareItem(item, plan)) === index);
  
      this.pacientes = this.turnos
        .map(turno => turno.paciente)
        .filter((paciente, index, array) => array.findIndex(item => compareItem(item, paciente)) === index);
    }
  }

}
