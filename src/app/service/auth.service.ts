import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _registerUrl = "http://localhost:8000/register";
  private _loginUrl = "http://localhost:8000/login";

  constructor( private http: HttpClient ) { }
  
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}