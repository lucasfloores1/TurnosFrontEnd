import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddTurnoComponent } from './components/add-turno/add-turno.component';
import { FeaturesComponent } from './components/features/features.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPacienteComponent } from './components/add-paciente/add-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { AddInstitutoComponent } from './components/add-instituto/add-instituto.component';
import { AddObraSocialComponent } from './components/add-obra-social/add-obra-social.component';
import { AddMedicoComponent } from './components/add-medico/add-medico.component';
import { AddEstudioComponent } from './components/add-estudio/add-estudio.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AddTurnoComponent,
    FeaturesComponent,
    CalendarFormComponent,
    SearchPipe,
    AddPacienteComponent,
    LoginComponent,
    AddInstitutoComponent,
    AddObraSocialComponent,
    AddMedicoComponent,
    AddEstudioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
