import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnosRoutingModule } from './turnos-routing.module';
import { TurnosComponent } from './turnos.component';
import { TurnoDetailsComponent } from './turno-details/turno-details.component';
import { AddTurnoComponent } from './add-turno/add-turno.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
//Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class TurnosModule { }
