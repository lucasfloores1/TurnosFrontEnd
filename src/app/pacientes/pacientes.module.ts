import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';
import { AddPacienteComponent } from './add-paciente/add-paciente.component';
import { PacienteDetailsComponent } from './paciente-details/paciente-details.component';


@NgModule({
  declarations: [
    PacientesComponent,
    AddPacienteComponent,
    PacienteDetailsComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    MaterialModule
  ]
})
export class PacientesModule { }
