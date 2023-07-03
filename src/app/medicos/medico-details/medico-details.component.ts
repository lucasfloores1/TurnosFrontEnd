import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMedicoDTO } from 'src/app/model/Medico';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Instituto } from 'src/app/model/Instituto';
import { HorarioDTO } from 'src/app/model/Horario';
import { InstitutoService } from 'src/app/services/instituto.service';
import { MedicoService } from 'src/app/services/medico.service';
import { InstitutoDTO } from 'src/app/model/Instituto';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-medico-details',
  templateUrl: './medico-details.component.html',
  styleUrls: ['./medico-details.component.scss']
})
export class MedicoDetailsComponent implements OnInit{

  sendAnimation : boolean = false;
  animation : boolean = false;

  showForm : boolean = false;
  showButtons : boolean = true;

  medico! : GetMedicoDTO;

  isHorariosSelected : boolean = false;
  showBtn : boolean = false;
  newInsituto : boolean = false;

  indexInicio : number = 1
  indexFin : number = 37
  horas : string[] = ['05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30']
  diasSemana : string[] = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
  intervalos : number[] = [15,30,45,60,75,90]
  nuevosHorarios : any = []

  userId : any = localStorage.getItem('user')

  institutos! : Instituto[]

  selectedInstituto! : InstitutoDTO 

  horarios! : FormArray

  medForm! : FormGroup;

  constructor(
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private medicoService : MedicoService,
    private institutoService : InstitutoService,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {
    this.animation = true;
    this.route.paramMap.subscribe( (paramMap : any) => {
      const {params} = paramMap;
      this.loadMedico(params.id)
    })
  }

  loadMedico( id : number ){
    this.medicoService.getMedicoById(id).subscribe( response => {
      this.medico = response
      this.medForm = this.fb.group({
        id : [this.medico.id , Validators.required],
        userId : [localStorage.getItem('user') , Validators.required],
        nombre : [this.medico.nombre , Validators.required ],
        dni : [this.medico.dni , Validators.required ],
        mail : [this.medico.mail , [Validators.required, Validators.email] ],
        tel : [this.medico.tel , Validators.required ],
        direccion :  [this.medico.direccion , Validators.required ],
        matricula : [this.medico.matricula, Validators.required ],
        idInstituto : ['' , Validators.required],
        horarios: this.fb.array([])
      })
      //Ordeno los dias de los horarios
      for ( let instituto of this.medico.institutos ){
        instituto.horarios.sort( ( a , b ) => a.dia - b.dia ) 
      }
      //Cargo los institutos y seteo los intitutos en los que el medico no trabaja 
      this.institutoService.getInstitutos(this.userId).subscribe( response => {
        const idsToRemove = this.medico.institutos.map( instituto => instituto.id )
        this.institutos = response.filter( instituto => !idsToRemove.includes( instituto.id ) )
      })
      this.horarios = this.medForm.get('horarios') as FormArray
      this.animation = false;
    })
  }

  setNuevosHorarios( horarios : HorarioDTO[] , isNew : boolean ){
    if (isNew){
      console.log("es nuevo");
      
      for( let i = 0; i < this.diasSemana.length; i++ ){
        const horario = {
          dia : i+1,
          inicio : Math.floor( Math.random()* ( 17 - 0 + 1 ) ) + 0,
          fin : Math.floor( Math.random()* ( 37 - 18 + 1 ) ) + 18,
          intervalo : this.intervalos[1],
          trabaja : false,
        }
        this.nuevosHorarios.push(horario)
      }
    } else {
      console.log("no es nuevo");
      
      for( let i = 0; i < this.diasSemana.length; i++ ){
        const horarioEncontrado = horarios.find( horario => horario.dia == i+1 )
        if ( horarioEncontrado != undefined ){
          const horarioExistente = {
            dia : horarioEncontrado.dia,
            inicio : this.horas.indexOf(horarioEncontrado.inicio),
            fin : this.horas.indexOf(horarioEncontrado.fin),
            intervalo : horarioEncontrado.intervalo,
            trabaja : true,
          }
          this.nuevosHorarios.push(horarioExistente)
        } else {
          const horario = {
            dia : i+1,
            inicio : Math.floor( Math.random()* ( 17 - 0 + 1 ) ) + 0,
            fin : Math.floor( Math.random()* ( 37 - 18 + 1 ) ) + 18,
            intervalo : this.intervalos[1],
            trabaja : false,
          }
          this.nuevosHorarios.push(horario)
        }
      }
    }
  }

  addHorarios(){
    this.isHorariosSelected = !this.isHorariosSelected
    this.medForm.patchValue({
      userId : localStorage.getItem('user')
    }) 
    const horariosSeleccionados = this.nuevosHorarios.filter( (horario : any) => horario.trabaja )
    for ( let i = 0; i < horariosSeleccionados.length; i++ ){
      const nuevoHorario = this.fb.group({
        id : [0, Validators.required],
        dia : [horariosSeleccionados[i].dia, Validators.required],
        inicio : [this.horas[horariosSeleccionados[i].inicio], Validators.required],
        fin : [this.horas[horariosSeleccionados[i].fin], Validators.required],
        intervalo: [horariosSeleccionados[i].intervalo, Validators.required]
      })
      this.horarios.push(nuevoHorario)
    }    
  }

  triggerBtn(){
    if(this.nuevosHorarios.some( (horario : any) => horario.trabaja)){
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }

  formatLabel( value : number ): string {
    var horas : string[] = ['05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','00:00']    
    return `${horas[value]}`;
  }

  updateMedico(){
    const institutoValue = this.medForm.get('idInstituto')?.value;
    const idInstituto = institutoValue.id;
    this.medForm.patchValue({ idInstituto });
    console.log(this.medForm.value);    
    this.medicoService.updateMedico( this.medForm.value ).subscribe( 
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Médico actualizado con éxito!!")
        this.router.navigate([`medicos`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`medicos`])
      }
    ) 
  }

  getErrorMessage(){
    if(this.medForm.get('mail')?.hasError('required')){
      return 'Este campo es obligatorio'
    }
    return this.medForm.get('mail')?.hasError('email') ? 'El mail que ingresaste no es válido' : ''
  }

  onSelectInsituto( value : any ){    
    if ( value == "nuevo" ){      
      this.newInsituto = true;
    }else {   

      this.nuevosHorarios = []      
      this.setNuevosHorarios( value.horarios , false )
      this.triggerBtn()
    }
  }

  onSelectNewInsituto( value : any ){

    this.nuevosHorarios = []
    this.setNuevosHorarios ( value.horarios , true )
    this.triggerBtn()
  }

  toggleForm(){
    this.showForm = !this.showForm
    this.showButtons = !this.showButtons
  }

}
