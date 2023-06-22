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

  pacientes! : Paciente[]

  searchText : string = ''

  constructor( private router : Router, private pacienteService : PacienteService ){}

  ngOnInit(){

    this.pacienteService.getPacientes( localStorage.getItem('user') ).subscribe( response =>{
      this.pacientes = response;
      console.log(this.pacientes);      
    })

  }

  pacienteDetail( paciente : Paciente ){
    this.router.navigate([`pacientes/details/${paciente.id}`])
  }


}
