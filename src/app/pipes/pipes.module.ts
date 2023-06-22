import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { TurnoPipe } from './turno.pipe';



@NgModule({
  declarations: [
    SearchPipe,
    TurnoPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SearchPipe,
    TurnoPipe
  ]
})
export class PipesModule { }
