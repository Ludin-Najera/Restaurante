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
  };

  eliminarusuario(id: string){
    return this.http.delete(`http://localhost:3000/users/${id}`)
    
  }

  editarusuarios(id: string | number, editarusuarios: usuarios1): Observable<usuarios1>{
    return this.http.patch(`http://localhost:3000/users/${id}`, editarusuarios);
  }

  //mostrar todos los usuarios
  getusuarios() {

    return this.http.get('http://localhost:3000/users')
  }

  //mostrar un usuario
  getusuario(id: string){
    return this.http.get(`http://localhost:3000/users/${id}`);
  }




}
