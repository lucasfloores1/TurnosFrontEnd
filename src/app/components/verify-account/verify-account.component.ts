import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {

  showError : boolean = false

  user! : User

  codeForm! : FormGroup

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private loginService : LoginService,
    private fb : FormBuilder,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap : any) => {
      const {params} = paramMap;
      this.loadUser(params.id)
    })
  }

  loadUser( id : any ){
    this.loginService.getUserById( id ).subscribe( response => {
      this.user = response      
      if(this.user.enabled){
        this.router.navigate(['login'])
      }else{
      this.codeForm = this.fb.group({
        code : ['' , Validators.required]
      })
      }
    })
  }

  verifyAccount(){
    this.loginService.verifyAccount( this.user.id, this.codeForm.get('code')?.value ).subscribe( (response) => {
      this.notiService.OkNotification('Tu cuenta fue verificada')
      this.router.navigate(['login'])      
    },(error) => {
      this.showError = true;            
    })
  }
} 
