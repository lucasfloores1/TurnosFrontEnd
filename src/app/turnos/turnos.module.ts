import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnosRoutingModule } from './turnos-routing.module';
import { TurnosComponent } from './turnos.component';
import { TurnoDetailsComponent } from './turno-details/turno-details.component';
import { AddTurnoComponent } from './add-turno/add-turno.component';
import { MaterialModule } from '../material/material.module';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    TurnosComponent,
    TurnoDetailsComponent,
    AddTurnoComponent,
    CalendarFormComponent,
  ],
  imports: [
    CommonModule,
    TurnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ]
})
export class TurnosModule { }
