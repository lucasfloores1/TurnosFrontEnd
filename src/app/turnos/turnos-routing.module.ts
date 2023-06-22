import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnosComponent } from './turnos.component';
import { AuthGuard } from '../guards/auth.guard';
import { TurnoDetailsComponent } from './turno-details/turno-details.component';
import { AddTurnoComponent } from './add-turno/add-turno.component';

const routes: Routes = [
  {
    path : '',
    canActivateChild : [AuthGuard],
    children : [
      {
        path : '',
        component : TurnosComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
