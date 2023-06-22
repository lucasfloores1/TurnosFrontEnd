import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObrasSocialesRoutingModule } from './obras-sociales-routing.module';
import { ObrasSocialesComponent } from './obras-sociales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';
import { AddObraSocialComponent } from './add-obra-social/add-obra-social.component';
import { ObraSocialDetailsComponent } from './obra-social-details/obra-social-details.component';


@NgModule({
  declarations: [
    ObrasSocialesComponent,
    AddObraSocialComponent,
    ObraSocialDetailsComponent
  ],
  imports: [
    CommonModule,
    ObrasSocialesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    MaterialModule
  ]
})
export class ObrasSocialesModule { }