import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstitutoService } from 'src/app/services/instituto.service';

@Component({
  selector: 'app-add-instituto',
  templateUrl: './add-instituto.component.html',
  styleUrls: ['./add-instituto.component.css']
})
export class AddInstitutoComponent implements OnInit {

  instForm : FormGroup = this.fb.group({
    userId: [localStorage.getItem('user') ,Validators.required],
    nombre: ['' , Validators.required],
    direccion: ['' , Validators.required],
    cuit: ['' , Validators.required]
  })

  constructor( 
    private fb : FormBuilder,
    private institutoService : InstitutoService,
    private router : Router
  ){}

  ngOnInit(): void {

  }

  createInstituto(){

    this.institutoService.createInstituto(this.instForm.value).subscribe( response => console.log( response ) );
    this.router.navigate(['home'])
    
  }

}
