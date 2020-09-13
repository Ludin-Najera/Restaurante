import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { usuarios1 } from '../models/usuarios';
import { bebidas1 } from '../models/bebidas';
import { complementos1 } from '../models/complementos';
import { tiposervicio1 } from '../models/tiposervicio';
import { menu1 } from '../models/menu';
import { factura1 } from '../models/factura';
import { detallepedido1 } from '../models/detallepedido';

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

    return this.http.get('http://localhost:5000/bebida');
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

  //mostrar todos los complementos
  getcomplementos() {

    return this.http.get('http://localhost:5000/complemento')
  }

  //mostrar un complemento
  getcomplemento(id: string){
    return this.http.get(`http://localhost:5000/complemento/${id}`);
  }

}



//tiposervicio

@Injectable({
  providedIn: 'root'
})
export class TiposervicioService {

  constructor(private http: HttpClient){}

  insertartiposervicio(tiposervicio: tiposervicio1){
    return this.http.post('http://localhost:5000/servicio', tiposervicio)
  };

  eliminartiposervicio(id: string){
    return this.http.delete(`http://localhost:5000/servicio/${id}`)
    
  }

  editartiposervicio(id: string | number, tiposervicio: tiposervicio1): Observable<tiposervicio1>{
    return this.http.put(`http://localhost:5000/servicio/${id}`, tiposervicio);
  }

  //mostrar todos los tiposservicio
  gettiposervicios() {

    return this.http.get('http://localhost:5000/servicio')
  }

  //mostrar un tiposervicio
  gettiposervicio(id: string){
    return this.http.get(`http://localhost:5000/servicio/${id}`);
  }

}



//menu
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient){}

  insertarmenu(menu: menu1){
    return this.http.post('http://localhost:5000/menu', menu)
  };

  eliminarmenu(id: string){
    return this.http.delete(`http://localhost:5000/menu/${id}`)
    
  }

  editarmenu(id: string | number, menu: menu1): Observable<menu1>{
    return this.http.put(`http://localhost:5000/menu/${id}`, menu);
  }

  //mostrar todos los menu
  getmenus() {

    return this.http.get('http://localhost:5000/menu')
  }

  //mostrar un menu
  getmenu(id: string){
    return this.http.get(`http://localhost:5000/menu/${id}`);
  }

}



//factura
@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient){}

  insertarfactura(factura: factura1){
    return this.http.post('http://localhost:5000/factura', factura)
  };

  eliminarfactura(id: string){
    return this.http.delete(`http://localhost:5000/factura/${id}`)
    
  }

  editarfactura(id: string | number, factura: factura1): Observable<factura1>{
    return this.http.put(`http://localhost:5000/factura/${id}`, factura);
  }

  //mostrar todos las facturas
  getfacturas() {

    return this.http.get('http://localhost:5000/factura')
  }

  //mostrar una factura
  getfactura(id: string){
    return this.http.get(`http://localhost:5000/factura/${id}`);
  }

}





//detallepedido
@Injectable({
  providedIn: 'root'
})
export class DetallepedidoService{

  constructor(private http: HttpClient){}

  insertardetallepedido(detallepedido: detallepedido1){
    return this.http.post('http://localhost:5000/detalle', detallepedido)
  };

  eliminardetallepedido(id: string){
    return this.http.delete(`http://localhost:5000/detalle/${id}`)
    
  }

  editardetallepedido(id: string | number, detallepedido: detallepedido1): Observable<detallepedido1>{
    return this.http.put(`http://localhost:5000/detalle/${id}`, detallepedido);
  }

  //mostrar todos los detalles
  getdetallepedidos() {

    return this.http.get('http://localhost:5000/detalle')
  }

  getdetallepedidos2() {

    return this.http.get('http://localhost:5000/entregado')
  }

  //mostrar un detalle
  getdetallepedido(id: string){
    return this.http.get(`http://localhost:5000/detalle/${id}`);
  }

}

