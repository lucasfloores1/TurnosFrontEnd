import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  isSubmitted : boolean = false;
  showErrorMessage : boolean = false;

  loginForm : FormGroup = this.fb.group({
    username : ['', Validators.required ],
    password : ['', Validators.required ]
  })

  constructor( 
    private router : Router,
    private fb : FormBuilder,
    private loginService : LoginService
  ){}
  
  ngOnInit(): void {

    //this.checkLogin()
    
  }

  login(){

    this.isSubmitted = !this.isSubmitted 
    this.loginService.generateToken(this.loginForm.value).subscribe(
      (response : any) => {       
        this.loginService.loginUser(response.token);
        this.loginService.getCurrentUser(response.token).subscribe( response => {
          const text = JSON.stringify(response)
          const user = JSON.parse(text)
          this.loginService.setUser(user.id);
          this.router.navigate(['home']);
        });        
      },(error) => {if(error.status = 403){this.toggleShowErrorMessage()}
      }
    );

  }

  toggleShowErrorMessage(){

    this.showErrorMessage = !this.showErrorMessage;

  }

  checkLogin(){
    if(this.loginService.validateToken() && (localStorage.getItem('user') != null || localStorage.getItem('token') != null )){
      this.router.navigate(['home'])
      console.log("is loggedin");
      
    }
  }

}
