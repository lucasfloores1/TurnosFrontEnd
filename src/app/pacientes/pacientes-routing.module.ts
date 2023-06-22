import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes.component';
import { AuthGuard } from '../guards/auth.guard';
import { PacienteDetailsComponent } from './paciente-details/paciente-details.component';
import { AddPacienteComponent } from './add-paciente/add-paciente.component';

const routes: Routes = 
[
  {
    path : '',
    canActivateChild : [AuthGuard],
    children : [
      {
        path : '',
        component : PacientesComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
