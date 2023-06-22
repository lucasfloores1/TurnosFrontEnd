import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/model/Medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

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
    this.router.navigate([`medico/details/${medico.id}`])
  }

}
