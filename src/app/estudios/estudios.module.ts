import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiosRoutingModule } from './estudios-routing.module';
import { EstudiosComponent } from './estudios.component';
import { AddEstudioComponent } from './add-estudio/add-estudio.component';
import { EstudioDetailsComponent } from './estudio-details/estudio-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
//Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AnimationsModule } from '../animations/animations.module';

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
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    AnimationsModule
  ]
})
export class EstudiosModule { }
