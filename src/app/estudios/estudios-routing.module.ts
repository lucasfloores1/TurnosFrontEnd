import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiosComponent } from './estudios.component';
import { AuthGuard } from '../guards/auth.guard';
import { EstudioDetailsComponent } from './estudio-details/estudio-details.component';
import { AddEstudioComponent } from './add-estudio/add-estudio.component';

const routes: Routes = 
[
  {
    path : '',
    canActivateChild : [AuthGuard],
    children : [
      {
        path : '',
        component : EstudiosComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiosRoutingModule { }
