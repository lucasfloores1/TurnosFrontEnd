import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instituto } from 'src/app/model/Instituto';
import { InstitutoService } from 'src/app/services/instituto.service';

@Component({
  selector: 'app-instituto',
  templateUrl: './instituto.component.html',
  styleUrls: ['./instituto.component.scss']
})
export class InstitutoComponent implements OnInit{

  institutos! : Instituto[]

  searchText : string = ''

  constructor(
    private router : Router,
    private institutoService : InstitutoService
  ){}

  ngOnInit(): void {

    this.institutoService.getInstitutos( localStorage.getItem('user') ).subscribe( response => this.institutos = response )
    
  }

  institutoDetail( instituto : Instituto ){
    this.router.navigate([`instituto/details/${instituto.id}`])
  }

}
