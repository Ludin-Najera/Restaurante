import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    alias: [''],
    pass: [''],
  })
  constructor(private inicioservice: InicioService, private fb:FormBuilder, private router:Router) { }


  ngOnInit(): void {
    const UserData = {
      alias: 'BARRUCO',
      pass: 'a123',
    };
    this.inicioservice.login(UserData).subscribe((res) => console.log('Login'));
  }
  
  onLogin():void{
    const formValue = this.loginForm.value;
    this.inicioservice.login(formValue).subscribe( res => {
      if (res){
        this.router.navigate(['']);
      }
    });
  }
}
