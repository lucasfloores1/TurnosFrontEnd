import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetObraSocialDTO } from 'src/app/model/dto/GetObraSocialDTO';
import { ObraSocialDTO } from 'src/app/model/dto/ObraSocialDTO';
import { PlanDTO } from 'src/app/model/dto/PlanDTO';
import { ObraSocialService } from 'src/app/services/obra-social.service';

@Component({
  selector: 'app-obra-social-details',
  templateUrl: './obra-social-details.component.html',
  styleUrls: ['./obra-social-details.component.scss']
})
export class ObraSocialDetailsComponent implements OnInit {

  planes! : FormArray

  obraSocial! : GetObraSocialDTO

  obraForm! : FormGroup

  constructor(
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private obraSocialService : ObraSocialService
  ){}

  ngOnInit(): void {

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
    console.log(this.obraForm.value);
    
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
  }


}
