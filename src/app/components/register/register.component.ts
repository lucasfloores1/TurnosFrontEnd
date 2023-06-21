import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isSubmitted : boolean = false;
  showErrorMessage : boolean = false;

  signupForm : FormGroup = this.fb.group({
    nombre : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    tel : ['', Validators.required],
    username : ['', Validators.required ],
    password : ['', Validators.required ]
  })

  constructor(
    private fb : FormBuilder,
    private loginService : LoginService,
    private router : Router
  ){}

  signUp(){
    console.log(this.signupForm.value);
    
    this.loginService.registerUser( this.signupForm.value ).subscribe( response => {
      this.router.navigate([`verify-account/${response.id}`])
    })    
  }

  toggleShowErrorMessage(){
    this.showErrorMessage = !this.showErrorMessage;
  }

  getErrorMessage(){
    if(this.signupForm.get('mail')?.hasError('required')){
      return 'Este campo es obligatorio'
    }
    return this.signupForm.get('mail')?.hasError('email') ? 'El mail que ingresaste no es válido' : ''
  }

}
