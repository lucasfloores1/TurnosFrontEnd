import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './medicos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';
import { AddMedicoComponent } from './add-medico/add-medico.component';
import { MedicoDetailsComponent } from './medico-details/medico-details.component';


@NgModule({
  declarations: [
    MedicosComponent,
    AddMedicoComponent,
    MedicoDetailsComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    MaterialModule
  ]
})
export class MedicosModule { }
