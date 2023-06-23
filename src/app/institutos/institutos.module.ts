import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutosRoutingModule } from './institutos-routing.module';
import { InstitutosComponent } from './institutos.component';
import { AddInstitutoComponent } from './add-instituto/add-instituto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { InstitutoDetailsComponent } from './instituto-details/instituto-details.component';
//Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    InstitutosComponent,
    AddInstitutoComponent,
    InstitutoDetailsComponent
  ],
  imports: [
    CommonModule,
    InstitutosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
  ]
})
export class InstitutosModule { }
