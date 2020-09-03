import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alias: string;
  pass: string;

  // constructor(public inicioservice: InicioService) { }
  constructor(private inicioservice: InicioService) { }

  login(){
    const user = {alias: this.alias, pass: this.pass};
    this.inicioservice.login(user).subscribe( data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
