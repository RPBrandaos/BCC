import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { MessageService } from '../ui/snack-bar/message.service';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  public form:FormGroup;
  public settings: Settings;
  public loading = false;

  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router, private _authService: AuthService, private message: MessageService){
    
    localStorage.removeItem('token');
    
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'rememberMe': false
    });
  }

  public onSubmit(values:Object):void {
    this.loading = true;
    if (this.form.valid) {
      this._authService.loginUser(values).subscribe(res=>{
        this.loading = false;
        localStorage.setItem('token',res.token);
        this.router.navigate(['/']);
        console.log(res);
      },error=>{
        this.loading = false;
        this.message.openSnackBar(error.error, '');
        console.log(error);
      })
    }
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false;
  }
}