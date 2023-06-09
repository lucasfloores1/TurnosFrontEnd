import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetObraSocialDTO } from 'src/app/model/ObraSocial';
import { NotificationService } from 'src/app/services/notification.service';
import { ObraSocialService } from 'src/app/services/obra-social.service';

@Component({
  selector: 'app-obra-social-details',
  templateUrl: './obra-social-details.component.html',
  styleUrls: ['./obra-social-details.component.scss']
})
export class ObraSocialDetailsComponent implements OnInit {

  animation : boolean = false;
  sendAnimation : boolean = false;
  showForm : boolean = false;
  showButtons : boolean = true;

  planes! : FormArray

  obraSocial! : GetObraSocialDTO

  obraForm! : FormGroup

  constructor(
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private obraSocialService : ObraSocialService,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {
    this.animation = true;
    this.obraForm = this.fb.group({
      userId: [localStorage.getItem('user'), Validators.required],
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      planes: this.fb.array([])
    });

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.loadObraSocial(params.id);
    });
  }

  loadObraSocial( id : any ){

    this.obraSocialService.getObraSocialById(id).subscribe(response => {
      this.obraSocial = response;
      this.obraForm.patchValue({
        id: this.obraSocial.id,
        nombre: this.obraSocial.nombre,
        direccion: this.obraSocial.direccion
      });
      this.planes = this.obraForm.get('planes') as FormArray;
      this.setPlanes();
    });

  }

  updateObraSocial(){
    this.sendAnimation = true;
    this.obraSocialService.createObraSocial( this.obraForm.value ).subscribe(
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Obra Social actualizada con éxito!!")
        this.router.navigate([`obras-sociales`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`obras-sociales`])
      }
    )      
  }

  removePlan( index : number ){
    this.planes.removeAt(index)
  }

  addPlan(){
    const newPlan = this.fb.group({
      id : [0, Validators.required],
      nombre : ['',Validators.required]
    })
    this.planes.push(newPlan)
  }

  setPlanes(){
    for (let plan of this.obraSocial.planes) {
      const newPlan = this.fb.group({
        id: [plan.id, Validators.required],
        nombre: [plan.nombre, Validators.required]
      });
      this.planes.push(newPlan);
    }
    this.animation = false;
  }

  toggleForm(){
    this.showForm = !this.showForm
    this.showButtons = !this.showButtons
  }

}
