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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TurnoComponent } from './components/turno/turno.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { InstitutoComponent } from './components/instituto/instituto.component';
import { ObraSocialComponent } from './components/obra-social/obra-social.component';
import { MedicoComponent } from './components/medico/medico.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path : '',
    children: [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'home',
        component : DashboardComponent
      },
      {
        path : '404',
        component : ErrorComponent
      },
      {
        path : 'features',
        component : FeaturesComponent
      },
      {
        path : 'turno',
        children : [
          {
            path : '',
            component : TurnoComponent
          },
          {
            path : 'create',
            component : AddTurnoComponent
          }
        ]
      },
      {
        path : 'paciente',
        children : [
          {
            path : '',
            component : PacienteComponent
          },
          {
            path : 'create',
            component : AddPacienteComponent
          }
        ]
      },
      {
        path : 'instituto',
        children : [
          {
            path : '',
            component : InstitutoComponent
          },
          {
            path : 'create',
            component : AddInstitutoComponent
          }
        ]
      },
      {
        path : 'obra-social',
        children : [
          {
            path : '',
            component : ObraSocialComponent
          },
          {
            path : 'create',
            component : AddObraSocialComponent
          }
        ]
      },
      {
        path : 'medico',
        children : [
          {
            path : '',
            component : MedicoComponent
          },
          {
            path : 'create',
            component : AddMedicoComponent
          }
        ]
      },
      {
        path : 'estudio',
        children : [
          {
            path : '',
            component : EstudioComponent
          },
          {
            path : 'create',
            component : AddEstudioComponent
          }
        ]
      },
      {
        path : '**',
        redirectTo : '404'
      }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
