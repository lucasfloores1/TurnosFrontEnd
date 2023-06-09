import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/services/estudio.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-estudio',
  templateUrl: './add-estudio.component.html',
  styleUrls: ['./add-estudio.component.scss']
})
export class AddEstudioComponent implements OnInit{

  sendAnimation: boolean = false;

  estForm : FormGroup = this.fb.group({
    userId : [localStorage.getItem('user'), Validators.required],
    id : [0, Validators.required],
    nomenclador : ['', Validators.required],
    nombre : ['', Validators.required]
  })

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private estudioService : EstudioService,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {
    
  }

  createEstudio(){
    this.estudioService.createEstudio(this.estForm.value).subscribe(
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Estudio creado con éxito!!")
        this.router.navigate([`estudios`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`estudios`])
      }
    )
  }

}
