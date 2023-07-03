import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/model/Turno';
import { TurnoService } from 'src/app/services/turno.service';
import { Paciente } from 'src/app/model/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { Medico } from 'src/app/model/Medico';
import { MedicoService } from 'src/app/services/medico.service';
import { InstitutoDTO } from 'src/app/model/Instituto';
import { HorarioDTO } from 'src/app/model/Horario';
import { GetPacienteDTO } from 'src/app/model/Paciente';
import { ObraSocialDTO } from 'src/app/model/ObraSocial';
import { Estudio } from 'src/app/model/Estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { NuevoTurnoDTO } from 'src/app/model/Turno';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-turno',
  templateUrl: './add-turno.component.html',
  styleUrls: ['./add-turno.component.scss']
})
export class AddTurnoComponent implements OnInit{

  animation : boolean = false;
  startAnimation : boolean = false;
  obraAnimation : boolean = false;
  medAnimation : boolean = false;

  linear : boolean = true;
  searchMedico : string = ''
  searchInstituto : string = ''
  searchPaciente : string = ''
  searchObraSocial : string = ''
  searchEstudio : string = ''

  isMedicoSelected : boolean = false;
  isInstitutoSelected : boolean = false;
  isPacienteSelected : boolean = false;
  isObraSocialSelected : boolean = false;
  isEstudioSelected : boolean = false;

  userId : any = localStorage.getItem('user')
  fecha! : string ;
  turnos! : Turno[];
  horarios! : HorarioDTO[];
  selectedMedico! : Medico;
  selectedInstituto! : InstitutoDTO;
  selectedPaciente! : Paciente;
  selectedPacienteDTO! : GetPacienteDTO;
  selectedObraSocial! : ObraSocialDTO;
  selectedEstudio! : Estudio;

  estudios : Estudio[] = []
  institutos : InstitutoDTO[] = []  
  pacientes : Paciente[] = []
  medicos : Medico[] = []

  constructor( 
      private router : Router,
      private pacienteService : PacienteService,
      private medicoService : MedicoService,
      private turnoService :  TurnoService,
      private estudioService : EstudioService,
      private notiService : NotificationService
    ){}

  ngOnInit(): void {
    this.startAnimation = true;
    this.pacienteService.getPacientes( this.userId ).subscribe( response => {
      this.pacientes = response
      if(this.pacientes.length == 0){
        this.notiService.ErrorNotification('Aún no tienes pacientes creados')
        this.router.navigate(['home'])
        this.startAnimation = false;
      }
      this.medicoService.getMedicos( this.userId ).subscribe( response => {
        this.medicos = response
        if(this.medicos.length == 0){
          this.notiService.ErrorNotification('Aún no tienes medicos creados')
          this.router.navigate(['home'])
          this.startAnimation = false;
        }
        this.estudioService.getEstudios( this.userId ).subscribe( response => {
          this.estudios = response
          if(this.estudios.length == 0){
            this.notiService.ErrorNotification('Aún no tienes estudios creados')
            this.router.navigate(['home'])
            this.startAnimation = false;
          }
          this.startAnimation = false;
        })
      })
    })
  }

  selectMedico( medico : Medico){
    this.selectedMedico = medico;
    this.toggleMedicoSelected()
  }

  loadMedicoToDTO(medico : Medico){
    this.medAnimation = true;
    this.medicoService.getMedicoById(medico.id).subscribe( response => {
      this.institutos = response.institutos
      this.turnoService.getTurnosByMedico(medico.id).subscribe( response => {
        this.turnos = response
        this.medAnimation = false;
      })
    })
  }

  toggleMedicoSelected(){
    this.isInstitutoSelected = false;
    this.isMedicoSelected = !this.isMedicoSelected;
  }

  selectInstituto(instituto : InstitutoDTO ){
    this.selectedInstituto = instituto;
    this.toggleInstitutoSelected()
  }

  loadInstitutoToDTO( instituto : InstitutoDTO ){   
    this.selectedInstituto = instituto;
    this.horarios = this.selectedInstituto.horarios;
  }

  toggleInstitutoSelected(){
    this.isInstitutoSelected = !this.isInstitutoSelected    
  }

  fechaSelected( fecha : any ){
    this.fecha = fecha;
  }

  resetFecha(){
    this.fecha = '';
  }

  togglePacienteSelected(){
    this.isPacienteSelected = !this.isPacienteSelected    
  }

  loadPacienteToDTO(paciente : Paciente){    
    this.selectedPaciente = paciente;
    this.isPacienteSelected = !this.isPacienteSelected;    
  }

  getPacienteDTO(){
    this.obraAnimation = true;
    this.pacienteService.getPacienteById(this.selectedPaciente.id).subscribe( response => {
      this.selectedPacienteDTO = response
      this.obraAnimation = false;
    })
  }

  navigateToAddPaciente(){
    this.router.navigate(['/pacientes/create']) 
  }

  toggleObraSocialSelected(){
    this.isObraSocialSelected = !this.isObraSocialSelected
  }

  loadObraSocialToDTO( obraSocial : ObraSocialDTO ){
    this.selectedObraSocial = obraSocial;
    this.toggleObraSocialSelected()
  }

  toggleEstudioSelected(){
    this.isEstudioSelected = !this.isEstudioSelected
  }

  loadEstudioToDTO( estudio : Estudio ){
    this.selectedEstudio = estudio;
    this.toggleEstudioSelected()
  }

  isAllStepsCompleted(){
    return this.isEstudioSelected && this.isInstitutoSelected && this.isObraSocialSelected && this.isPacienteSelected && this.isMedicoSelected;    
  }

  createTurno(){

    const newTurno : NuevoTurnoDTO = {

      userId : this.userId ? parseInt(this.userId) : 0,
      id : 0, 
      fecha : this.fecha,
      cargado : false,
      confirmado : false,
      cancelado : false,
      idMedico : this.selectedMedico.id,
      idInstituto : this.selectedInstituto.id,
      idPaciente : this.selectedPaciente.id,
      idObraSocial : this.selectedObraSocial.id,
      idPlan : this.selectedObraSocial.plan.id,
      idEstudio : this.selectedEstudio.id
    }

    //Animation ON
    this.animation = true;

    this.turnoService.createTurno(newTurno).subscribe(
      response => {
        this.animation = false;
        this.notiService.OkNotification("Turno creado con éxito!!")
        this.router.navigate([`turnos`])
      }, error => {
        this.animation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`turnos`])
      }
    )
  }

}
