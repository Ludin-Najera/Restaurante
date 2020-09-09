import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public inicioservice: InicioService, private router: Router) { }
  

  
  login(){
    const user = {username: this.username, password: this.password};
    this.inicioservice.login(user).subscribe( data => {
      console.log(data); 
    
    this.router.navigateByUrl('/perfil');
      

    });
  }

  ngOnInit(): void {
  }

}
