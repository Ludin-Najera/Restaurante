import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

import { usuarioiresp, usuarioi } from './../../app/models/login.interface';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { 
    this.checkToken();
  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

//LOGIN

  login(UserData: usuarioi): Observable<any>{
    return this.http.post<usuarioiresp>('http://localhost:3000/auth', 
    UserData).pipe(
      map( (res:usuarioiresp) => {
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError( (err) => this.handlerError(err))
    );
  }

//LOGOUT

  logout():void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired ->', isExpired);
    if (isExpired){
      this.logout();
    }else{
      this.loggedIn.next(true);
    }
  }
  
  private saveToken(token:string):void{
    localStorage.setItem('token', token);
  }


//ERROR

  private handlerError(err): Observable<never>{
    let errorMessage = 'An error ocurred retrienving data';
    if (err){
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
