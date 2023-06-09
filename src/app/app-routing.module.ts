import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { AddTurnoComponent } from './components/add-turno/add-turno.component';
import { AddPacienteComponent } from './components/add-paciente/add-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { AddInstitutoComponent } from './components/add-instituto/add-instituto.component';
import { AddObraSocialComponent } from './components/add-obra-social/add-obra-social.component';
import { AddMedicoComponent } from './components/add-medico/add-medico.component';
import { AddEstudioComponent } from './components/add-estudio/add-estudio.component';
import { ConfirmTurnoComponent } from './components/confirm-turno/confirm-turno.component';
import { CancelTurnoComponent } from './components/cancel-turno/cancel-turno.component';
import { ErrorTurnoComponent } from './components/error-turno/error-turno.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: FeaturesComponent },
  { path: 'turno/create', component: AddTurnoComponent },
  { path: 'instituto/create', component: AddInstitutoComponent },
  { path: 'paciente/create', component : AddPacienteComponent },
  { path: 'obraSocial/create', component : AddObraSocialComponent },
  { path: 'medico/create', component : AddMedicoComponent },
  { path: 'estudio/create', component : AddEstudioComponent },
  { path: 'confirm-turno', component : ConfirmTurnoComponent },
  { path: 'cancel-turno', component : CancelTurnoComponent },
  { path: 'error-turno', component : ErrorTurnoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
