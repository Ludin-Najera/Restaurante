import { Component, OnInit } from '@angular/core';
import { usuarios1 } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/inicio.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  usuarios: usuarios1 = {
    id: 0,
    username: '',
    password: '',
    role: '',

  };

  constructor( private inicioservice : UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar(){
    delete this.usuarios.id;

    this.inicioservice.insertarusuarios(this.usuarios).subscribe(res=> {
      
      console.log(res);
      this.router.navigateByUrl('/perfil');
      
      
    },
      err=> console.error(err)
    )

    
    
  }



}
