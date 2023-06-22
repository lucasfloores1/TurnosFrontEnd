import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiosRoutingModule } from './estudios-routing.module';
import { EstudiosComponent } from './estudios.component';
import { AddEstudioComponent } from './add-estudio/add-estudio.component';
import { EstudioDetailsComponent } from './estudio-details/estudio-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    EstudiosComponent,
    AddEstudioComponent,
    EstudioDetailsComponent
  ],
  imports: [
    CommonModule,
    EstudiosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    MaterialModule
  ]
})
export class EstudiosModule { }
