import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { UsuariosService } from '../../services/inicio.service';
import { usuarios1 } from 'src/app/models/usuarios';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class bebidasComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuario: any = [];

  constructor(private usuariosservice: UsuariosService) { }

  ngOnInit() {

    this.actualizar();    

  }

  actualizar(){
    this.usuariosservice.getusuarios().subscribe(
      res => {
        this.usuario = res;
      },
        
      err => console.error(err)
    );
  }

  eliminarusuario(id: string){
    this.usuariosservice.eliminarusuario(id).subscribe(
      res => {
        console.log(res)
        this.actualizar();
      },
      err => console.log(err)
    );
  }

  editarusuario(id: string){
    console.log(id);
  }



}
