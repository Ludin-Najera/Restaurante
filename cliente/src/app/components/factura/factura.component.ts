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
  
  bebida:string[]=["Coca Cola","Sprite","Fanta Uva","Fanta Naranja","Coca Cola Zero","Agua Pura","Frezca","Fuze Tea Durazno","Fuze Tea Mango","Fuze Tea Manzana","Agua Mineral","Coca Cola Ligth"];
  selbebida:string[]=[];

  menu:string[]=["Combo Familia 1","Combo Familiar 2","Combo Familiar 3","Combo Familiar 4","Menu Pollo","Menu Pechuguitas","Menu desayuno 1","Menu desayuno 2","Menu de alitas"];
  selmenu:string[]=[];

  complemento:string[]=["Ensalada Verde","Ensalada de repollo","Papa al Horno","Pure de papa","Papa frita grande","Papa frita mediana","Papa frita pequeña","Helado","Pie de piña","Hershey pie","Aros de cebolla"];
  selcomplemento:string[]=[];
 

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
