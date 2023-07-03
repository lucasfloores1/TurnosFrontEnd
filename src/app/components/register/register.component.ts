import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  sendAnimation : boolean = false;

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
    private router : Router,
    private notiService : NotificationService
  ){}

  signUp(){
    this.sendAnimation = true;
    this.loginService.registerUser( this.signupForm.value ).subscribe(
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Enviamos un código a tu email")
        this.router.navigate([`verify-account/${response.id}`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("El usuario o email ya está en uso")
        this.toggleShowErrorMessage()
      }
    )    
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
