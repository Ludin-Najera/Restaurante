import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { DetallepedidoService } from '../../services/inicio.service';
import { cocina1 } from '../../models/cocina';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  detallepedidos: any = [];

  constructor( private detallepedidosservice: DetallepedidoService ) { }

  ngOnInit() {

    this.detallepedidosservice.getdetallepedidos2().subscribe(
      res => {
        this.detallepedidos = res;
      },
        
      err => console.error(err)
    );
  }


}
