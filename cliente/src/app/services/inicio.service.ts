import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get('http://localhost:3000/login')
  }


}
