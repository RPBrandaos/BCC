import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public settings: Settings;
  
  constructor(public appSettings:AppSettings, public snackBar: MatSnackBar) {
    this.settings = this.appSettings.settings;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
