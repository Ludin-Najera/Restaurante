import { Component, OnInit } from '@angular/core';
import { factura1 } from '../../models/factura';
import { detallepedido1 } from '../../models/detallepedido';
import { FacturaService } from '../../services/inicio.service';
import { DetallepedidoService } from '../../services/inicio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  status:string[]=["Preparacion","Entrega","Finalizado"];
  sellista:string[]=[];
  

factura: factura1 = {
    idfactura: 0,
    serie: '',
    numerofactura: '',
    nit: '',
    nombre: '',
    status: '',
    monto: '',
    id: '',
  };

  detallepedido: detallepedido1 = {
    iddetallepedido: 0,
    idmenu: '',
    idcomplementos: '',
    cantidad: '',
    total: '',
  };

  edit: boolean = false;

  constructor( private facturaservice: FacturaService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit(){

    const params = this.activedroute.snapshot.params;
    console.log(params);
     if(params.idmenu){
      this.facturaservice.getfactura(params.idfactura).subscribe(res=> {
        console.log(res);
        this.factura = res;
        this.edit = true;
      }, 
      err => console.error(err)
      );
    }


  }

  registrar(){
    delete this.factura.idfactura;

    this.facturaservice.insertarfactura(this.factura).subscribe(res=> {
      
      console.log(res);
      this.router.navigateByUrl('/perfil');
      
      
    },
      err=> console.error(err)
    );
  }

  editar(){
    this.facturaservice.editarfactura(this.factura.idfactura, this.factura).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/editar_factura');
    },
      err => console.log(err)
    );
  }





}
