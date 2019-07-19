import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){

    let authService = this.injector.get(AuthService);
    console.log('Executando a interceptação...');
    let jwt_token = authService.getToken();

    let tokenizedReq = req.clone({
      setHeaders:{
          token: jwt_token ? jwt_token : ''
        }
      }
    );

    return next.handle(tokenizedReq);

  }

}