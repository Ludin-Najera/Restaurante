import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { DetallepedidoService } from '../../services/inicio.service';
import { detallepedido1 } from '../../models/detallepedido';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  detallepedidos: any = [];

  constructor(private detallepedidosservice: DetallepedidoService ) { }

  ngOnInit() {
    this.detallepedidosservice.getdetallepedidos().subscribe(
      res => {
        this.detallepedidos = res;
      },
        
      err => console.error(err)
    );
  }

}
