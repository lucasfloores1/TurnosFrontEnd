import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/model/Turno';
import { TurnoService } from 'src/app/services/turno.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Paciente } from 'src/app/model/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { Medico } from 'src/app/model/Medico';
import { MedicoService } from 'src/app/services/medico.service';
import { MatStepper } from '@angular/material/stepper';
import { InstitutoService } from 'src/app/services/instituto.service';
import { Instituto } from 'src/app/model/Instituto';
import { InstitutoDTO } from 'src/app/model/dto/InstitutoDTO';
import { HorarioDTO } from 'src/app/model/dto/HorarioDTO';

@Component({
  selector: 'app-add-turno',
  templateUrl: './add-turno.component.html',
  styleUrls: ['./add-turno.component.css']
})
export class AddTurnoComponent implements OnInit{

  linear : boolean = false;

  isMedicoSelected : boolean = false;
  isInstitutoSelected : boolean = false;

  turnos! : Turno[];
  horarios! : HorarioDTO[];
  selectedMedico! : Medico;
  selectedInstituto! : InstitutoDTO;

  institutos : InstitutoDTO[] = []  
  pacientes : Paciente[] = []
  medicos : Medico[] = []

  constructor( 
      private pacienteService : PacienteService,
      private medicoService : MedicoService,
      private institutoService : InstitutoService,
      private turnoService :  TurnoService
    ){}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe( response => this.pacientes = response )
    this.medicoService.getMedicos().subscribe( response => this.medicos = response )
  }

  loadMedicoToDTO(medico : Medico){    
    this.selectedMedico = medico;
    this.isMedicoSelected = !this.isMedicoSelected;
    this.medicoService.getMedicoById(medico.id).subscribe( response => this.institutos = response.institutos )
    this.turnoService.getTurnosByMedico(medico.id).subscribe( response => this.turnos = response )
  }

  toggleMedicoSelected(){
    this.isInstitutoSelected = false;
    this.isMedicoSelected = !this.isMedicoSelected;
  }

  loadInstitutoToDTO( instituto : InstitutoDTO ){   
    this.selectedInstituto = instituto;
    this.horarios = instituto.horarios;
    this.isInstitutoSelected = !this.isInstitutoSelected
  }

  toggleInstitutoSelected(){
    this.isInstitutoSelected = !this.isInstitutoSelected    
  }

}
