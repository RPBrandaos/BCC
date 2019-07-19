import { Component, OnInit } from '@angular/core';
import { BoletimService } from './../../../service/boletim.service';
import { AppSettings } from '../../../app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public displayedColumns = ['inscricao', 'proprietario', 'cpf', 'aforamento'];
  public settings: Settings;
  public dataSource: any;
  
  constructor(private _dataBoletim: BoletimService, public appSettings:AppSettings) {
    this.settings = this.appSettings.settings;
    this.dataSource = this._dataBoletim.getTodos();
  }

  ngOnInit() {
   
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}