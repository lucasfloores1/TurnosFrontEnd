import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/Estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-estudio-details',
  templateUrl: './estudio-details.component.html',
  styleUrls: ['./estudio-details.component.scss']
})
export class EstudioDetailsComponent implements OnInit{

  animation : boolean = false;
  sendAnimation : boolean = false;
  showForm : boolean = false;
  showButtons : boolean = true;

  estudio! : Estudio

  estForm! : FormGroup

  constructor(
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private estudioService : EstudioService,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {
    this.animation = true;
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.loadEstudio(params.id);
    });
  }

  loadEstudio( id : any ){
    this.estudioService.getEstudioById( id ).subscribe( response => {
      this.estudio = response
      this.estForm = this.fb.group({
        userId : [localStorage.getItem('user'), Validators.required],
        id : [this.estudio.id , Validators.required],
        nomenclador : [this.estudio.nomenclador , Validators.required],
        nombre : [this.estudio.nombre , Validators.required]
      })
      this.animation = false;
    })
  }

  updateEstudio(){
    this.estudioService.createEstudio(this.estForm.value).subscribe(
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Estudio actualizado con éxito!!")
        this.router.navigate([`estudios`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`estudios`])
      }
    )
    this.router.navigate(['estudio'])    
  }

  toggleForm(){
    this.showForm = !this.showForm
    this.showButtons = !this.showButtons
  }


}
