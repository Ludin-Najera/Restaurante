import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  login(use: any): Observable<any>{
    return this.http.get('http://localhost:3000/login');

  }


}
