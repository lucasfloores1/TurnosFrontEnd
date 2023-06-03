import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selectedObraSocial! : number ;
  planes! : Plan[];

  pacienteForm : FormGroup = this.fb.group({
    id: ['0', Validators.required ],
    nombre : ['', Validators.required ],
    dni : ['', Validators.required ],
    mail : ['', Validators.required, Validators.email ],
    tel : ['', Validators.required ],
    direccion :  ['', Validators.required ],
    idObraSocial : ['', Validators.required ],
    idPlan : ['', Validators.required ],
    afiliado : ['', Validators.required ]
  })

  constructor( 
    private fb : FormBuilder,
    private pacienteService : PacienteService,
    private obraSocialService : ObraSocialService
  ){}

  ngOnInit(): void {

    this.obraSocialService.getObrasSociales().subscribe( response => this.obrasSociales = response )
    
  }

  setPlanes( obraSocial : ObraSocial ){
    this.planes = obraSocial.planes;
    console.log(this.planes);
    
  }

}
