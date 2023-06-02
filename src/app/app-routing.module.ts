import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { AddTurnoComponent } from './components/add-turno/add-turno.component';
import { AddPacienteComponent } from './components/add-paciente/add-paciente.component';

const routes: Routes = [
  { path: 'home', component: FeaturesComponent },
  { path: 'turno/create', component: AddTurnoComponent },
  { path: 'paciente/create', component : AddPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
