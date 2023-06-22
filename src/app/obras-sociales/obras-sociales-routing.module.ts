import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObrasSocialesComponent } from './obras-sociales.component';
import { ObraSocialDetailsComponent } from './obra-social-details/obra-social-details.component';
import { AddObraSocialComponent } from './add-obra-social/add-obra-social.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = 
[
  {
    path : 'obra-social',
    canActivateChild : [AuthGuard],
    children : [
      {
        path : '',
        component : ObrasSocialesComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasSocialesRoutingModule { }
