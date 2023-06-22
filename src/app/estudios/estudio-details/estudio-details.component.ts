import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/Estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudio-details',
  templateUrl: './estudio-details.component.html',
  styleUrls: ['./estudio-details.component.scss']
})
export class EstudioDetailsComponent implements OnInit{

  showForm : boolean = false

  estudio! : Estudio

  estForm! : FormGroup

  constructor(
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private estudioService : EstudioService
  ){}

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.loadEstudio(params.id);
    });
    
  }

  loadEstudio( id : any ){
    this.estudioService.getEstudioById( id ).subscribe( response => {
      this.estudio = response
      console.log(response);
      this.estForm = this.fb.group({
        userId : [localStorage.getItem('user'), Validators.required],
        id : [this.estudio.id , Validators.required],
        nomenclador : [this.estudio.nomenclador , Validators.required],
        nombre : [this.estudio.nombre , Validators.required]
      })
    })
  }

  updateEstudio(){
    this.estudioService.createEstudio(this.estForm.value).subscribe( response => console.log(response) )
    this.router.navigate(['estudio'])    
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

}
