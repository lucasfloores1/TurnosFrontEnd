import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { SbOkComponent } from './sb-ok/sb-ok.component';
import { SbErrorComponent } from './sb-x/sb-error.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoadingComponent,
    SbOkComponent,
    SbErrorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class AnimationsModule { }
