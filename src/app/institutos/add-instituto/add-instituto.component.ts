import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstitutoService } from 'src/app/services/instituto.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-instituto',
  templateUrl: './add-instituto.component.html',
  styleUrls: ['./add-instituto.component.scss']
})
export class AddInstitutoComponent implements OnInit {

  sendAnimation : boolean = false;

  instForm : FormGroup = this.fb.group({
    userId: [localStorage.getItem('user') ,Validators.required],
    nombre: ['' , Validators.required],
    direccion: ['' , Validators.required],
    cuit: ['' , Validators.required]
  })

  constructor( 
    private fb : FormBuilder,
    private institutoService : InstitutoService,
    private router : Router,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {

  }

  createInstituto(){
    this.sendAnimation = true;
    this.institutoService.createInstituto(this.instForm.value).subscribe( 
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Instituto creado con éxito!!")
        this.router.navigate([`institutos`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`institutos`])
      }
    )
  }

}
