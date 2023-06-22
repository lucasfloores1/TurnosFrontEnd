import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutosComponent } from './institutos.component';

const routes: Routes = [{ path: '', component: InstitutosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutosRoutingModule { }
