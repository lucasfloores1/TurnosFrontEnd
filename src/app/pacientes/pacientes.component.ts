import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/model/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit{

  animation : boolean = false;

  pacientes! : Paciente[]

  searchText : string = ''

  constructor( private router : Router, private pacienteService : PacienteService ){}

  ngOnInit(){
    this.animation = true;
    this.pacienteService.getPacientes( localStorage.getItem('user') ).subscribe( response =>{
      this.pacientes = response;
      this.animation = false;     
    })
  }

  pacienteDetail( paciente : Paciente ){
    this.router.navigate([`pacientes/details/${paciente.id}`])
  }

}
