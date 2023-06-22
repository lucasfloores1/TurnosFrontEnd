import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/model/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit{

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
    this.router.navigate([`paciente/details/${paciente.id}`])
  }


}
