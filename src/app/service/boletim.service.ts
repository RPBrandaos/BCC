import { Boletim } from './../models/Boletim';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BoletimService {

  private _todos = 'http://localhost:8000/auth/boletim';

  constructor(private _http: HttpClient) { }

  getTodos() {
    return this._http.get<Boletim>(this._todos)
      .pipe(map(boletim => {
        return boletim;
      }));
  }

  add(boletim){
    return this._http.post<Boletim>(this._todos,boletim);
  }

}
