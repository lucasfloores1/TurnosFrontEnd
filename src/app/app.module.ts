import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddTurnoComponent } from './components/turno/add-turno/add-turno.component';
import { FeaturesComponent } from './components/features/features.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPacienteComponent } from './components/paciente/add-paciente/add-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { AddInstitutoComponent } from './components/instituto/add-instituto/add-instituto.component';
import { AddObraSocialComponent } from './components/obra-social/add-obra-social/add-obra-social.component';
import { AddMedicoComponent } from './components/medico/add-medico/add-medico.component';
import { AddEstudioComponent } from './components/estudio/add-estudio/add-estudio.component';
import { ConfirmTurnoComponent } from './components/turno/confirm-turno/confirm-turno.component';
import { CancelTurnoComponent } from './components/turno/cancel-turno/cancel-turno.component';
import { ErrorTurnoComponent } from './components/turno/error-turno/error-turno.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TurnoComponent } from './components/turno/turno.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { InstitutoComponent } from './components/instituto/instituto.component';
import { ObraSocialComponent } from './components/obra-social/obra-social.component';
import { MedicoComponent } from './components/medico/medico.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { ErrorComponent } from './components/error/error.component';



//Date import
import LocaleAR from '@angular/common/locales/es-AR'
import { LOCATION_INITIALIZED, registerLocaleData } from '@angular/common';
import { TurnoPipe } from './pipes/turno.pipe';
import { TurnoDetailsComponent } from './components/turno/turno-details/turno-details.component';
import { MedicoDetailsComponent } from './components/medico/medico-details/medico-details.component';
import { PacienteDetailsComponent } from './components/paciente/paciente-details/paciente-details.component';
import { InstitutoDetailsComponent } from './components/instituto/instituto-details/instituto-details.component';
import { EstudioDetailsComponent } from './components/estudio/estudio-details/estudio-details.component';
import { ObraSocialDetailsComponent } from './components/obra-social/obra-social-details/obra-social-details.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
registerLocaleData( LocaleAR, 'es' );

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
    ConfirmTurnoComponent,
    CancelTurnoComponent,
    ErrorTurnoComponent,
    NavigationComponent,
    DashboardComponent,
    TurnoComponent,
    PacienteComponent,
    InstitutoComponent,
    ObraSocialComponent,
    MedicoComponent,
    EstudioComponent,
    ErrorComponent,
    TurnoPipe,
    TurnoDetailsComponent,
    MedicoDetailsComponent,
    PacienteDetailsComponent,
    InstitutoDetailsComponent,
    EstudioDetailsComponent,
    ObraSocialDetailsComponent,
    RegisterComponent,
    VerifyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [authInterceptorProviders,{ provide : LOCATION_INITIALIZED, useValue : 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
