import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddTurnoComponent } from './components/add-turno/add-turno.component';
import { FeaturesComponent } from './components/features/features.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { AddPacienteComponent } from './components/add-paciente/add-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AddTurnoComponent,
    FeaturesComponent,
    CalendarFormComponent,
    SearchPipe,
    AddPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
