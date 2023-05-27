import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
