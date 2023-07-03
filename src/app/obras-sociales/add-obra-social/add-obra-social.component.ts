import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ObraSocialService } from 'src/app/services/obra-social.service';

@Component({
  selector: 'app-add-obra-social',
  templateUrl: './add-obra-social.component.html',
  styleUrls: ['./add-obra-social.component.scss']
})
export class AddObraSocialComponent implements OnInit {

  sendAnimation : boolean = false;

  planes! : FormArray

  userId : any = localStorage.getItem('user')

  obraForm : FormGroup = this.fb.group({
    userId: [this.userId ,Validators.required],
    id: [0, Validators.required],
    nombre: ['' , Validators.required],
    direccion: ['' , Validators.required],
    planes: this.fb.array([])
  })

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private obraSocialService : ObraSocialService,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {
    this.planes = this.obraForm.get('planes') as FormArray
    this.userId = this.userId ? parseInt(this.userId) : -1    
  }

  addPlan() {
    const nuevoPlan = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required]
    });
    this.planes.push(nuevoPlan);
  }
  
  deletePlan(index: number) {
    this.planes.removeAt(index);
  }

  createObraSocial(){    
    this.obraSocialService.createObraSocial( this.obraForm.value ).subscribe(
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Obra Social creada con éxito!!")
        this.router.navigate([`obras-sociales`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`obras-sociales`])
      }
    )      
  }

}
