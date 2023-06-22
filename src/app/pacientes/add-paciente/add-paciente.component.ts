import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObraSocial } from 'src/app/model/ObraSocial';
import { Plan } from 'src/app/model/Plan';
import { NuevoPacienteDTO } from 'src/app/model/Paciente';
import { ObraSocialService } from 'src/app/services/obra-social.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.scss']
})
export class AddPacienteComponent implements OnInit {

  obrasSociales! : ObraSocial[];
  obraSocial! : ObraSocial;
  planes! : Plan[]
  isSubmitted : boolean = false;
  userId : any = localStorage.getItem('user')
  

  pacienteForm : FormGroup = this.fb.group({
    userId : [localStorage.getItem('user') , Validators.required],
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

    this.obraSocialService.getObrasSociales( this.userId ).subscribe( response => {
      this.obrasSociales = response.filter( obra => obra.nombre !== "Particular" )
    })    
    this.pacienteForm.get('idObraSocial')?.valueChanges.subscribe( idObraSocial => { 
      this.obraSocialService.getPlanesByObraSocial(idObraSocial).subscribe( response => this.planes = response )
    })
    
  }

  createPaciente(){

    if (this.pacienteForm.invalid){
      this.isSubmitted = true
    } else {
      const paciente = this.pacienteForm.value

      const NuevoPacienteDTO : NuevoPacienteDTO = {
        userId : paciente.userId,
        id : 0,
        nombre : paciente.nombre,
        dni : paciente.dni,
        mail : paciente.mail,
        tel : paciente.tel,
        direccion : paciente.direccion,
        obrasSociales : [{
          idObraSocial : paciente.idObraSocial,
          idPlan : paciente.idPlan,
          afiliado : paciente.afiliado,
        }]
      }      
      this.pacienteService.createPaciente(NuevoPacienteDTO).subscribe( response => console.log(response) )
      this.router.navigate(['home']) 
    }

  }

  getErrorMessage(){
    if(this.pacienteForm.get('mail')?.hasError('required')){
      return 'Este campo es obligatorio'
    }
    return this.pacienteForm.get('mail')?.hasError('email') ? 'El mail que ingresaste no es válido' : ''
  }

}
