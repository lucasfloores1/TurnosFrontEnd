import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-add-estudio',
  templateUrl: './add-estudio.component.html',
  styleUrls: ['./add-estudio.component.css']
})
export class AddEstudioComponent implements OnInit{

  estForm : FormGroup = this.fb.group({
    userId : [localStorage.getItem('user'), Validators.required],
    nombre : ['', Validators.required],
    nomenclador : ['', Validators.required]
  })

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private estudioService : EstudioService
  ){}

  ngOnInit(): void {
    
  }

  createEstudio(){
    this.estudioService.createEstudio(this.estForm.value).subscribe( response => console.log(response) )
    this.router.navigate(['home'])
  }

}
