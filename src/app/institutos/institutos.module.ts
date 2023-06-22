import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutosRoutingModule } from './institutos-routing.module';
import { InstitutosComponent } from './institutos.component';
import { AddInstitutoComponent } from './add-instituto/add-instituto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';
import { InstitutoDetailsComponent } from './instituto-details/instituto-details.component';


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
    MaterialModule
  ]
})
export class InstitutosModule { }
