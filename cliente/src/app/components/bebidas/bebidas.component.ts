import { Component, OnInit } from '@angular/core';
import { bebidas1 } from 'src/app/models/bebidas';
import { BebidasService } from 'src/app/services/inicio.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})

export class BebidasComponent implements OnInit {

  bebidas: bebidas1 = {
    idbebidas: 0,
    nombre: '',
    precio: '',
  };

  edit: boolean = false;


  constructor(private bebidasservice: BebidasService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedroute.snapshot.params;
    console.log(params);
     if(params.idbebidas){
      this.bebidasservice.getbebida(params.idbebidas).subscribe(res=> {
        console.log(res);
        this.bebidas = res;
        this.edit = true;
      }, 
      err => console.error(err)
      );
    }
   }


  registrar(){
    delete this.bebidas.idbebidas;

    this.bebidasservice.insertarbebidas(this.bebidas).subscribe(res=> {
      
      console.log(res);
      this.router.navigateByUrl('/perfil');
      
      
    },
      err=> console.error(err)
    );
  }

  editar(){
    this.bebidasservice.editarbebidas(this.bebidas.idbebidas, this.bebidas).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/editar_bebidas');
    },
      err => console.log(err)
    );
  }






}
