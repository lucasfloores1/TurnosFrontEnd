import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObrasSocialesRoutingModule } from './obras-sociales-routing.module';
import { ObrasSocialesComponent } from './obras-sociales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { AddObraSocialComponent } from './add-obra-social/add-obra-social.component';
import { ObraSocialDetailsComponent } from './obra-social-details/obra-social-details.component';
//Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AnimationsModule } from '../animations/animations.module';

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
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    AnimationsModule
  ]
})
export class ObrasSocialesModule { }
