import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObraSocialService } from 'src/app/services/obra-social.service';

@Component({
  selector: 'app-add-obra-social',
  templateUrl: './add-obra-social.component.html',
  styleUrls: ['./add-obra-social.component.css']
})
export class AddObraSocialComponent implements OnInit {

  planes! : FormArray

  userId : any = localStorage.getItem('user')

  obraForm : FormGroup = this.fb.group({
    userId: [this.userId ,Validators.required],
    nombre: ['' , Validators.required],
    direccion: ['' , Validators.required],
    planes: this.fb.array([])
  })

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private obraSocialService : ObraSocialService
  ){}

  ngOnInit(): void {
    this.planes = this.obraForm.get('planes') as FormArray
    this.userId = this.userId ? parseInt(this.userId) : -1    
  }

  addPlan() {
    const nuevoPlan = this.fb.group({
      nombre: ['', Validators.required]
    });
    this.planes.push(nuevoPlan);
  }
  
  deletePlan(index: number) {
    this.planes.removeAt(index);
  }

  createObraSocial(){
    this.obraSocialService.createObraSocial( this.obraForm.value ).subscribe( response => console.log(response) )      
    this.router.navigate(['home'])
  }

}
