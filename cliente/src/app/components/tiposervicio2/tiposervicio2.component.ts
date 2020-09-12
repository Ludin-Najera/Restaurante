import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { TiposervicioService } from '../../services/inicio.service';
import { tiposervicio1 } from '../../models/tiposervicio';

@Component({
  selector: 'app-tiposervicio2',
  templateUrl: './tiposervicio2.component.html',
  styleUrls: ['./tiposervicio2.component.css']
})
export class Tiposervicio2Component implements OnInit {

  @HostBinding('class') classes = 'row';

  tiposervicio: any = [];

  constructor(private tiposervicioservice: TiposervicioService) { }

  ngOnInit() {
    this.actualizar();
  }

  actualizar(){
    this.tiposervicioservice.gettiposervicios().subscribe(
      res => {
        this.tiposervicio = res;
      },
        
      err => console.error(err)
    );
  }

  eliminarbebidas(id: string){
    this.tiposervicioservice.eliminartiposervicio(id).subscribe(
      res => {
        console.log(res)
        this.actualizar();
      },
      err => console.log(err)
    );
  }

  editarbebidas(id: string){
    console.log(id);
  }





}
