import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instituto } from 'src/app/model/Instituto';
import { HorarioDTO } from 'src/app/model/dto/HorarioDTO';
import { InstitutoService } from 'src/app/services/instituto.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-add-medico',
  templateUrl: './add-medico.component.html',
  styleUrls: ['./add-medico.component.css']
})
export class AddMedicoComponent implements OnInit{

  isHorariosSelected : boolean = false;
  showBtn : boolean = false;

  indexInicio : number = 1
  indexFin : number = 38
  horas : string[] = ['05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','00:00']
  diasSemana : string[] = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
  intervalos : number[] = [15,30,45,60,75,90]
  nuevosHorarios : any = []

  userId : any = localStorage.getItem('user')

  institutos! : Instituto[]

  horarios! : FormArray

  medForm : FormGroup = this.fb.group({
    userId : [localStorage.getItem('user'), Validators.required],
    nombre : ['', Validators.required ],
    dni : ['', Validators.required ],
    mail : ['', [Validators.required, Validators.email] ],
    tel : ['', Validators.required ],
    direccion :  ['', Validators.required ],
    matricula : ['', Validators.required ],
    idInstituto : ['', Validators.required ],
    horarios: this.fb.array([])
  })

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private medicoService : MedicoService,
    private institutoService : InstitutoService
  ){}

  ngOnInit(): void {

    this.institutoService.getInstitutos(this.userId).subscribe( response => this.institutos = response )

    this.horarios = this.medForm.get('horarios') as FormArray 

    this.setNuevosHorarios();
    
  }

  getErrorMessage(){
    if(this.medForm.get('mail')?.hasError('required')){
      return 'Este campo es obligatorio'
    }
    return this.medForm.get('mail')?.hasError('email') ? 'El mail que ingresaste no es válido' : ''
  }

  createMedico(){

  }

  formatLabel( value : number ): string {
    var horas : string[] = ['05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','00:00']    
    return `${horas[value]}`;
  }

  setNuevosHorarios(){
    for( let i = 0; i < this.diasSemana.length; i++ ){
      const horario = {
        dia : i+1,
        inicio : Math.floor( Math.random()* ( 17 - 0 + 1 ) ) + 0,
        fin : Math.floor( Math.random()* ( 38 - 18 + 1 ) ) + 18,
        intervalo : this.intervalos[0],
        trabaja : false,
      }
      this.nuevosHorarios.push(horario)
    }
  }

  addHorarios(){
    this.isHorariosSelected = !this.isHorariosSelected
    const horariosSeleccionados = this.nuevosHorarios.filter( (horario : any) => horario.trabaja )
    for ( let i = 0; i < horariosSeleccionados.length; i++ ){
      const nuevoHorario = this.fb.group({
        id : [i, Validators.required],
        dia : [horariosSeleccionados[i].dia, Validators.required],
        inicio : [this.horas[horariosSeleccionados[i].inicio], Validators.required],
        fin : [this.horas[horariosSeleccionados[i].fin], Validators.required],
        intervalo: [horariosSeleccionados[i].intervalo, Validators.required]
      })
      this.horarios.push(nuevoHorario)
    }
    this.medForm.updateValueAndValidity();    
  }
  
  triggerBtn(){
    if(this.nuevosHorarios.some( (horario : any) => horario.trabaja)){
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }

}
