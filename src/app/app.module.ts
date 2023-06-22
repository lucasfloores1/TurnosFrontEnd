import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ConfirmTurnoComponent } from './turnos/confirm-turno/confirm-turno.component';
import { CancelTurnoComponent } from './turnos/cancel-turno/cancel-turno.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { LOCATION_INITIALIZED, registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

//Date import
import LocaleAR from '@angular/common/locales/es-AR'
registerLocaleData( LocaleAR, 'es' );

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmTurnoComponent,
    CancelTurnoComponent,
    NavigationComponent,
    DashboardComponent,
    ErrorComponent,
    RegisterComponent,
    VerifyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders,{ provide : LOCATION_INITIALIZED, useValue : 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
