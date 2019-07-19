import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { MessageService } from './../ui/snack-bar/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, 
    public fb: FormBuilder, 
    public router:Router, 
    private _auth: AuthService,
    private message: MessageService){
    
    localStorage.removeItem('token');
    
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      this._auth.registerUser(values).subscribe(res=>{
        this.router.navigate(['/']);
        localStorage.setItem('token',res.token)
        this.message.openSnackBar('Logando...', 'Success');
      }, error=>{
        this.message.openSnackBar(error.error, '');
        console.log(error)
      });
    }
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}