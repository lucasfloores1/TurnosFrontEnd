import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { AddTurnoComponent } from './components/turno/add-turno/add-turno.component';
import { AddPacienteComponent } from './components/paciente/add-paciente/add-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { AddInstitutoComponent } from './components/instituto/add-instituto/add-instituto.component';
import { AddObraSocialComponent } from './components/obra-social/add-obra-social/add-obra-social.component';
import { AddMedicoComponent } from './components/medico/add-medico/add-medico.component';
import { AddEstudioComponent } from './components/estudio/add-estudio/add-estudio.component';
import { ConfirmTurnoComponent } from './components/turno/confirm-turno/confirm-turno.component';
import { CancelTurnoComponent } from './components/turno/cancel-turno/cancel-turno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TurnoComponent } from './components/turno/turno.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { InstitutoComponent } from './components/instituto/instituto.component';
import { ObraSocialComponent } from './components/obra-social/obra-social.component';
import { MedicoComponent } from './components/medico/medico.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { ErrorComponent } from './components/error/error.component';
import { TurnoDetailsComponent } from './components/turno/turno-details/turno-details.component';
import { PacienteDetailsComponent } from './components/paciente/paciente-details/paciente-details.component';
import { InstitutoDetailsComponent } from './components/instituto/instituto-details/instituto-details.component';
import { ObraSocialDetailsComponent } from './components/obra-social/obra-social-details/obra-social-details.component';
import { MedicoDetailsComponent } from './components/medico/medico-details/medico-details.component';
import { EstudioDetailsComponent } from './components/estudio/estudio-details/estudio-details.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

const routes: Routes = [
  {
    path : '',
    children: [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'register',
        component : RegisterComponent
      },
      {
        path : 'verify-account/:id',
        component : VerifyAccountComponent
      },
      {
        path : 'home',
        canActivateChild : [AuthGuard],
        children : [
          {
            path : '',
            component : DashboardComponent,
          }
        ]
      },
      {
        path : '404',
        component : ErrorComponent
      },
      {
        path : 'turno',
        canActivateChild : [AuthGuard],
        children : [
          {
            path : '',
            component : TurnoComponent
          },
          {
            path : 'details/:id',
            component : TurnoDetailsComponent
          },
          {
            path : 'create',
            component : AddTurnoComponent
          }
        ]
      },
      {
        path : 'paciente',
        canActivateChild : [AuthGuard],
        children : [
          {
            path : '',
            component : PacienteComponent
          },
          {
            path : 'details/:id',
            component : PacienteDetailsComponent,
          },
          {
            path : 'create',
            component : AddPacienteComponent
          }
        ]
      },
      {
        path : 'instituto',
        canActivateChild : [AuthGuard],
        children : [
          {
            path : '',
            component : InstitutoComponent
          },
          {
            path : 'details/:id',
            component : InstitutoDetailsComponent
          },
          {
            path : 'create',
            component : AddInstitutoComponent
          }
        ]
      },
      {
        path : 'obra-social',
        canActivateChild : [AuthGuard],
        children : [
          {
            path : '',
            component : ObraSocialComponent
          },
          {
            path : 'details/:id',
            component : ObraSocialDetailsComponent
          },
          {
            path : 'create',
            component : AddObraSocialComponent
          }
        ]
      },
      {
        path : 'medico',
        canActivateChild : [AuthGuard],
        children : [
          {
            path : '',
            component : MedicoComponent
          },
          {
            path : 'details/:id',
            component : MedicoDetailsComponent
          },
          {
            path : 'create',
            component : AddMedicoComponent
          }
        ]
      },
      {
        path : 'estudio',
        canActivateChild : [AuthGuard],
        children : [
          {
            path : '',
            component : EstudioComponent
          },
          {
            path : 'details/:id',
            component : EstudioDetailsComponent
          },
          {
            path : 'create',
            component : AddEstudioComponent
          }
        ]
      },
      {
        path: 'confirm-turno',
        component : ConfirmTurnoComponent
      },
      {
        path: 'cancer-turno',
        component : CancelTurnoComponent
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
