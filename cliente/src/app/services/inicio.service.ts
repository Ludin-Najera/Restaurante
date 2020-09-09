import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { usuarios1 } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post('http://localhost:3000/auth/login', user);
  }


}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient){}

  insertarusuarios(usuarios: usuarios1){
    return this.http.post('http://localhost:3000/users', usuarios)
  }

}
