import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { ComplementosService } from '../../services/inicio.service';
import { complementos1 } from '../../models/complementos';

@Component({
  selector: 'app-complementos2',
  templateUrl: './complementos2.component.html',
  styleUrls: ['./complementos2.component.css']
})
export class Complementos2Component implements OnInit {

  @HostBinding('class') classes = 'row';

  complementos: any = [];

  constructor(private complementosservice: ComplementosService) { }

  ngOnInit(){
    this.actualizar();
  }

  actualizar(){
    this.complementosservice.getcomplementos().subscribe(
      res => {
        this.complementos = res;
      },
        
      err => console.error(err)
    );
  }

  eliminarcomplementos(id: string){
    this.complementosservice.eliminarcomplementos(id).subscribe(
      res => {
        console.log(res)
        this.actualizar();
      },
      err => console.log(err)
    );
  }

  editarcomplementos(id: string){
    console.log(id);
  }



}
