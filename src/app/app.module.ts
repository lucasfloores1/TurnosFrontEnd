import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ConfirmTurnoComponent } from './turnos/confirm-turno/confirm-turno.component';
import { CancelTurnoComponent } from './turnos/cancel-turno/cancel-turno.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LOCATION_INITIALIZED, registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
//Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

//Date import
import LocaleAR from '@angular/common/locales/es-AR';
import { AboutComponent } from './components/about/about.component'
registerLocaleData( LocaleAR, 'es' );

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmTurnoComponent,
    CancelTurnoComponent,
    NavigationComponent,
    DashboardComponent,
    RegisterComponent,
    VerifyAccountComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule

  ],
  providers: [authInterceptorProviders,{ provide : LOCATION_INITIALIZED, useValue : 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
