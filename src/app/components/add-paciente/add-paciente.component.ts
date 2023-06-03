import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObraSocial } from 'src/app/model/ObraSocial';
import { Plan } from 'src/app/model/Plan';
import { ObraSocialService } from 'src/app/services/obra-social.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  obrasSociales! : ObraSocial[];
  obraSocial! : ObraSocial;
  planes! : Plan[]
  isSubmitted : boolean = false;
  

  pacienteForm : FormGroup = this.fb.group({
    id: ['0', Validators.required ],
    nombre : ['', Validators.required ],
    dni : ['', Validators.required ],
    mail : ['', [Validators.required, Validators.email] ],
    tel : ['', Validators.required ],
    direccion :  ['', Validators.required ],
    idObraSocial : ['', Validators.required ],
    idPlan : ['', Validators.required ],
    afiliado : ['', Validators.required ]
  })

  constructor( 
    private router : Router,
    private fb : FormBuilder,
    private pacienteService : PacienteService,
    private obraSocialService : ObraSocialService
  ){}

  ngOnInit(): void {

    this.obraSocialService.getObrasSociales().subscribe( response => this.obrasSociales = response )    
    this.pacienteForm.get('idObraSocial')?.valueChanges.subscribe( idObraSocial => { 
      this.obraSocialService.getPlanesByObraSocial(idObraSocial).subscribe( response => this.planes = response )
    })
    
  }

  createPaciente(){

    if (this.pacienteForm.invalid){
      this.isSubmitted = true
    } else {
      this.pacienteService.createPaciente(this.pacienteForm.value).subscribe( response => console.log(response) )
      this.router.navigate(['/turno/create']) 
    }

  }

  getErrorMessage(){
    if(this.pacienteForm.get('mail')?.hasError('required')){
      return 'Este campo es obligatorio'
    }
    return this.pacienteForm.get('mail')?.hasError('email') ? 'El mail que ingresaste no es válido' : ''
  }

}
