import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SbOkComponent } from '../animations/sb-ok/sb-ok.component';
import { SbErrorComponent } from '../animations/sb-x/sb-error.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private sb : MatSnackBar ) { }

  OkNotification( message : string ){
    this.sb.openFromComponent(SbOkComponent, {
      data : message,
      verticalPosition : 'top',
      duration : 3000
    })
  }

  ErrorNotification( message : string ){
    this.sb.openFromComponent(SbErrorComponent, {
      data : message,
      verticalPosition : 'top',
      duration : 3000
    })
  }
}
