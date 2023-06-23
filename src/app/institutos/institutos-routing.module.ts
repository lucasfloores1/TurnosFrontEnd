import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutosComponent } from './institutos.component';
import { InstitutoDetailsComponent } from './instituto-details/instituto-details.component';
import { AddInstitutoComponent } from './add-instituto/add-instituto.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = 
[
  {
    path : '',
    canActivateChild : [AuthGuard],
    children : [
      {
        path : '',
        component : InstitutosComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutosRoutingModule { }
