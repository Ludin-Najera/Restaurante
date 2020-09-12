import { Component, OnInit } from '@angular/core';
import { usuarios1 } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/inicio.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-usuarios',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class menuComponent implements OnInit {

  usuarios: usuarios1 = {
    id: 0,
    username: '',
    password: '',
    role: '',

  };

  edit: boolean = false;

  constructor( private inicioservice : UsuariosService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activedroute.snapshot.params;
    if (params.id){
      this.inicioservice.getusuario(params.id).subscribe(res=>{
        console.log(res);
        this.usuarios = res;
        this.edit = true;
      },
      err => console.error(err)
        
        );
    }
  }

  registrar(){
    delete this.usuarios.id;

    this.inicioservice.insertarusuarios(this.usuarios).subscribe(res=> {
      
      console.log(res);
      this.router.navigateByUrl('/perfil');
      
      
    },
      err=> console.error(err)
    );
  }

  editar(){
    this.inicioservice.editarusuarios(this.usuarios.id, this.usuarios).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/editar_usuarios');
    },
      err => console.log(err)
    );
  }



}
