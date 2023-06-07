import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstitutoService } from 'src/app/services/instituto.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-instituto',
  templateUrl: './add-instituto.component.html',
  styleUrls: ['./add-instituto.component.css']
})
export class AddInstitutoComponent implements OnInit {

  isSubmitted : boolean = false;

  instForm : FormGroup = this.fb.group({
    userId: [localStorage.getItem('user') ,Validators.required],
    nombre: ['' , Validators.required],
    direccion: ['' , Validators.required],
    cuit: ['' , Validators.required]
  })

  constructor( 
    private fb : FormBuilder,
    private loginService : LoginService,
    private institutoService : InstitutoService,
    private router : Router
  ){}

  ngOnInit(): void {

  }

  createInstituto(){

    if(this.instForm.invalid){
      this.isSubmitted=!this.isSubmitted;
    }else {
      this.institutoService.createInstituto(this.instForm.value).subscribe( response => console.log( response ) );
      this.router.navigate(['home'])
    }

  }

}
