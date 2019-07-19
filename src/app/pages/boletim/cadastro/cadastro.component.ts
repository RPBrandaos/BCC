import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Boletim } from './../../../models/Boletim';
import { MessageService } from './../../ui/snack-bar/message.service';
import { BoletimService } from './../../../service/boletim.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {

  public form: FormGroup;
  public settings: Settings;
  private msg = null;

  constructor(public appSettings:AppSettings, public fb: FormBuilder, private boletimService: BoletimService, private message: MessageService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'proprietario': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'inscricao': [null, Validators.compose([Validators.required, Validators.minLength(14)])],
      'aforamento': [null],
      'cpf': [null, Validators.compose([Validators.minLength(11)])],
      'areaterreno': [null, Validators.compose([Validators.required])], 
      'testadaprincipal': [null, Validators.compose([Validators.required])], 
      'areaunidade': [null, Validators.compose([Validators.required])],
      'leste': [null, Validators.compose([Validators.required])], 
      'oeste': [null, Validators.compose([Validators.required])], 
      'norte': [null, Validators.compose([Validators.required])],
      'sul': [null, Validators.compose([Validators.required])],
      'frente': [null, Validators.compose([Validators.required])], 
      'fundo': [null, Validators.compose([Validators.required])], 
      'esquerdo': [null, Validators.compose([Validators.required])],
      'direito': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(){}

  public onSubmit(values:Boletim):void {
    
    if(this.form.valid){
      this.boletimService.add(values).subscribe(res=>{
        this.message.openSnackBar('Boletim cadastrado com sucesso!', '');
        console.log(res);
      }, error=>{
        this.message.openSnackBar(error, '');
        console.log(error);
        //this.msg = error.error.inscricao;
      });
    }
  }

}