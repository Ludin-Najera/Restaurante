import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public inicioservice: InicioService) { }
  

  
  login(){
    const user = {username: this.username, password: this.password};
    this.inicioservice.login(user).subscribe( data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
