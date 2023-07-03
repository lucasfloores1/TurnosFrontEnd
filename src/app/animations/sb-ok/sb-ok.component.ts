import { Component, inject, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sb-ok',
  templateUrl: './sb-ok.component.html',
  styleUrls: ['./sb-ok.component.scss']
})
export class SbOkComponent {

  snackBarRef = inject(MatSnackBarRef);

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data : string ){}

}
