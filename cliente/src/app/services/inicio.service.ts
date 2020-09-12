import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { usuarios1 } from '../models/usuarios';
import { bebidas1 } from "../models/bebidas";
import { complementos1 } from "../models/complementos";

//login

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post('http://localhost:3000/auth/login', user);
  }
}


//usuarios

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


//bebidas

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  constructor(private http: HttpClient){}

  insertarbebidas(bebidas: bebidas1){
    return this.http.post('http://localhost:5000/bebida', bebidas)
  };

  eliminarbebidas(id: string){
    return this.http.delete(`http://localhost:5000/bebida/${id}`)
    
  };

  editarbebidas(id: string | number, bebidas: bebidas1): Observable<bebidas1>{
    return this.http.put(`http://localhost:5000/bebida/${id}`, bebidas);
  };

  //mostrar todas las bebidas
  getbebidas() {

    return this.http.get('http://localhost:5000/bebida')
  };

  //mostrar una bebida
  getbebida(id: string){
    return this.http.get(`http://localhost:5000/bebida/${id}`);
  };

}



//complementos

@Injectable({
  providedIn: 'root'
})
export class ComplementosService {

  constructor(private http: HttpClient){}

  insertarcomplementos(complementos: complementos1){
    return this.http.post('http://localhost:5000/complemento', complementos)
  };

  eliminarcomplementos(id: string){
    return this.http.delete(`http://localhost:5000/complemento/${id}`)
    
  }

  editarcomplementos(id: string | number, editarcomplemento: complementos1): Observable<complementos1>{
    return this.http.put(`http://localhost:5000/complemento/${id}`, editarcomplemento);
  }

  //mostrar todos los usuarios
  getcomplementos() {

    return this.http.get('http://localhost:5000/complemento')
  }

  //mostrar un usuario
  getcomplemento(id: string){
    return this.http.get(`http://localhost:5000/complemento/${id}`);
  }

}
