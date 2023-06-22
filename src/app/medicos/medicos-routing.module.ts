import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './medicos.component';
import { AuthGuard } from '../guards/auth.guard';
import { MedicoDetailsComponent } from './medico-details/medico-details.component';
import { AddMedicoComponent } from './add-medico/add-medico.component';

const routes: Routes = 
[
  {
    path : '',
    canActivateChild : [AuthGuard],
    children : [
      {
        path : '',
        component : MedicosComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
