import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instituto } from 'src/app/model/Instituto';
import { InstitutoService } from 'src/app/services/instituto.service';

@Component({
  selector: 'app-institutos',
  templateUrl: './institutos.component.html',
  styleUrls: ['./institutos.component.scss']
})
export class InstitutosComponent implements OnInit{

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
    this.router.navigate([`institutos/details/${instituto.id}`])
  }

}
