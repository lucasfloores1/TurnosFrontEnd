import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/model/Medico';
import { MedicoService } from 'src/app/services/medico.service';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  medicos! : Medico[]

  searchText : string = ''

  constructor( private router : Router, private medicoService : MedicoService ){}

  ngOnInit(){

    this.medicoService.getMedicos( localStorage.getItem('user') ).subscribe( response =>{
      this.medicos = response;
      console.log(this.medicos);      
    })

  }

  medicoDetail( medico : Medico ){
    this.router.navigate([`medicos/details/${medico.id}`])
  }

}
