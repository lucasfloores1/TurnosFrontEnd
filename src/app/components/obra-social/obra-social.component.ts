import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObraSocial } from 'src/app/model/ObraSocial';
import { ObraSocialService } from 'src/app/services/obra-social.service';

@Component({
  selector: 'app-obra-social',
  templateUrl: './obra-social.component.html',
  styleUrls: ['./obra-social.component.scss']
})
export class ObraSocialComponent implements OnInit{

  obrasSociales! : ObraSocial[]

  searchText : string = ''


  constructor(
    private router : Router,
    private obraSocialService : ObraSocialService
  ){}

  ngOnInit(): void {

    this.obraSocialService.getObrasSociales( localStorage.getItem('user') ).subscribe( response => {
      this.obrasSociales = response.filter( obra => obra.nombre !== 'Particular' )
    })
    
  }

  obraSocialDetail( obraSocial : ObraSocial ){

    this.router.navigate([`obra-social/details/${obraSocial.id}`])

  }

}
