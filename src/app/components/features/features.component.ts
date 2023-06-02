import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit{

  constructor( private router : Router ){}

  ngOnInit(): void {
    
  }

  navigateToAddTurno(){
    this.router.navigate(['/turno/create'])
  }

  navigateToAddPaciente(){
    this.router.navigate(['/paciente/create'])
  }

}
