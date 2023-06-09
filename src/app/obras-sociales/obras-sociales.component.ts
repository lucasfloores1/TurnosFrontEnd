import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObraSocial } from 'src/app/model/ObraSocial';
import { ObraSocialService } from 'src/app/services/obra-social.service';
@Component({
  selector: 'app-obras-sociales',
  templateUrl: './obras-sociales.component.html',
  styleUrls: ['./obras-sociales.component.scss']
})
export class ObrasSocialesComponent implements OnInit{

  animation : boolean = false;

  obrasSociales! : ObraSocial[]

  searchText : string = ''


  constructor(
    private router : Router,
    private obraSocialService : ObraSocialService
  ){}

  ngOnInit(): void {
    this.animation = true;
    this.obraSocialService.getObrasSociales( localStorage.getItem('user') ).subscribe( response => {
      this.obrasSociales = response.filter( obra => obra.nombre !== 'Particular' )
      this.animation = false;
    })
  }

  obraSocialDetail( obraSocial : ObraSocial ){

    this.router.navigate([`obras-sociales/details/${obraSocial.id}`])

  }

}