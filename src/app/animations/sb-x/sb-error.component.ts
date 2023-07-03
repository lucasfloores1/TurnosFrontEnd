import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sb-error',
  templateUrl: './sb-error.component.html',
  styleUrls: ['./sb-error.component.scss']
})
export class SbErrorComponent {

  snackBarRef = inject(MatSnackBarRef);

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data : string ){}

}
