import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/Estudio';
import { EstudioService } from 'src/app/services/estudio.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit{

  searchText : string = ''

  estudios! : Estudio[]

  constructor(
    private router : Router,
    private estudioService : EstudioService
  ){}

  ngOnInit(): void {
    this.estudioService.getEstudios( localStorage.getItem('user') ).subscribe( response => this.estudios = response )
  }
  
  estudioDetail( estudio : Estudio ){
    this.router.navigate([`estudios/details/${estudio.id}`])
  }

}