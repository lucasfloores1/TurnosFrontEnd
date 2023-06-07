import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/model/Turno';
import { TurnoService } from 'src/app/services/turno.service';
import { Paciente } from 'src/app/model/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { Medico } from 'src/app/model/Medico';
import { MedicoService } from 'src/app/services/medico.service';
import { InstitutoDTO } from 'src/app/model/dto/InstitutoDTO';
import { HorarioDTO } from 'src/app/model/dto/HorarioDTO';
import { GetPacienteDTO } from 'src/app/model/dto/GetPacienteDTO';
import { ObraSocialDTO } from 'src/app/model/dto/ObraSocialDTO';
import { Estudio } from 'src/app/model/Estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { NuevoTurnoDTO } from 'src/app/model/dto/NuevoTurnoDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-turno',
  templateUrl: './add-turno.component.html',
  styleUrls: ['./add-turno.component.css']
})
export class AddTurnoComponent implements OnInit{

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
    ){}

  ngOnInit(): void {
    this.pacienteService.getPacientes( this.userId ).subscribe( response => this.pacientes = response )
    this.medicoService.getMedicos( this.userId ).subscribe( response => this.medicos = response )
    this.estudioService.getEstudios( this.userId ).subscribe( response => this.estudios = response )
  }

  selectMedico( medico : Medico){
    this.selectedMedico = medico;
    this.toggleMedicoSelected()
  }

  loadMedicoToDTO(medico : Medico){    
    this.medicoService.getMedicoById(medico.id).subscribe( response => this.institutos = response.institutos )
    this.turnoService.getTurnosByMedico(medico.id).subscribe( response => this.turnos = response )
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
    this.pacienteService.getPacienteById(this.selectedPaciente.id).subscribe( response => this.selectedPacienteDTO = response )
  }

  navigateToAddPaciente(){
    this.router.navigate(['/paciente/create']) 
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
      idMedico : this.selectedMedico.id,
      idInstituto : this.selectedInstituto.id,
      idPaciente : this.selectedPaciente.id,
      idObraSocial : this.selectedObraSocial.id,
      idPlan : this.selectedObraSocial.plan.id,
      idEstudio : this.selectedEstudio.id
    }

    this.turnoService.createTurno(newTurno).subscribe( response => {
      console.log(response);
      this.router.navigate(['home'])     
    })
  }

}
