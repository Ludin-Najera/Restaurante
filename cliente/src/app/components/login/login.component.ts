import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    alias: string;
    pass:  string;

  constructor(private inicioservice: InicioService) { }

    login(){
      const user= {alias: this.alias, pass: this.pass};
      console.log(this.alias);
      console.log(this.pass);
 
          }
          
  ngOnInit(): void {
  }
  

}
