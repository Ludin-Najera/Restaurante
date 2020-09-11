import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { BebidasService } from "../../services/inicio.service";
import { bebidas1 } from "src/app/models/bebidas";


@Component({
  selector: 'app-bebidas2',
  templateUrl: './bebidas2.component.html',
  styleUrls: ['./bebidas2.component.css']
})
export class Bebidas2Component implements OnInit {

  @HostBinding('class') classes = 'row';

  bebidas: any = [];

  constructor(private bebidasservice: BebidasService) { }

  ngOnInit() {
    this.actualizar();
  }


  actualizar(){
    this.bebidasservice.getbebidas().subscribe(
      res => {
        this.bebidas = res;
      },
        
      err => console.error(err)
    );
  }

  eliminarbebidas(idbebidas: string){
    this.bebidasservice.eliminarbebidas(idbebidas).subscribe(
      res => {
        console.log(res)
        this.actualizar();
      },
      err => console.log(err)
    );
  }

  editarbebidas(idbebidas: string){
    console.log(idbebidas);
  }




}
