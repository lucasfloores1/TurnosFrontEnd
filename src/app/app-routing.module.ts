import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ConfirmTurnoComponent } from './turnos/confirm-turno/confirm-turno.component';
import { CancelTurnoComponent } from './turnos/cancel-turno/cancel-turno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path : '',
    children: 
    [
      {
        path : 'about',
        component : AboutComponent,
      },
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
        path: 'confirm-turno',
        component : ConfirmTurnoComponent
      },
      {
        path: 'cancel-turno',
        component : CancelTurnoComponent
      },
      { path: 'turnos', loadChildren: () => import('./turnos/turnos.module').then(m => m.TurnosModule) },
      { path: 'pacientes', loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesModule) },
      { path: 'medicos', loadChildren: () => import('./medicos/medicos.module').then(m => m.MedicosModule) },
      { path: 'obras-sociales', loadChildren: () => import('./obras-sociales/obras-sociales.module').then(m => m.ObrasSocialesModule) },
      { path: 'institutos', loadChildren: () => import('./institutos/institutos.module').then(m => m.InstitutosModule) },
      { path: 'estudios', loadChildren: () => import('./estudios/estudios.module').then(m => m.EstudiosModule) },
      {
        path : '**',
        redirectTo : 'about'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
