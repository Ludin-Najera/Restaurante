import { Component, OnInit } from '@angular/core';
import { complementos1 } from '../../models/complementos';
import { ComplementosService } from '../../services/inicio.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent implements OnInit {

  complementos: complementos1 ={
    idcomplementos: 0,
    nombre: '',
    precio: '',
  };

  edit: boolean = true;

  constructor(private complementosservice: ComplementosService, private router: Router, private activedroute: ActivatedRoute ) { }

  ngOnInit(){
    const params = this.activedroute.snapshot.params;
    console.log(params);
     if(params.idcomplementos){
      this.complementosservice.getcomplemento(params.idcomplementos).subscribe(res=> {
        console.log(res);
        this.complementos = res;
        this.edit = true;
      }, 
      err => console.error(err)
      );
    }
  }


  registrar(){
    delete this.complementos.idcomplementos;

    this.complementosservice.insertarcomplementos(this.complementos).subscribe(res=> {
      console.log(res);
      this.router.navigateByUrl('/perfil');
    },
      err=> console.error(err)
    );
  }

  editar(){
    this.complementosservice.editarcomplementos(this.complementos.idcomplementos, this.complementos).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/editar_complementos');
    },
      err => console.log(err)
    );
  }







}
