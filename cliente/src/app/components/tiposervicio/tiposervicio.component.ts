import { Component, OnInit } from '@angular/core';
import { tiposervicio1 } from '../../models/tiposervicio';
import { TiposervicioService  } from '../../services/inicio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiposervicio',
  templateUrl: './tiposervicio.component.html',
  styleUrls: ['./tiposervicio.component.css']
})
export class TiposervicioComponent implements OnInit {

  tiposervicio: tiposervicio1 = {
    idtiposervicio: 0,
    nombre: '',
  };

  edit: boolean = false;

  constructor(private tiposervicioservice: TiposervicioService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activedroute.snapshot.params;
    console.log(params);
     if(params.idtiposervicio){
      this.tiposervicioservice.gettiposervicio(params.idbebidas).subscribe(res=> {
        console.log(res);
        this.tiposervicio = res;
        this.edit = true;
      }, 
      err => console.error(err)
      );
    }
  }

  registrar(){
    delete this.tiposervicio.idtiposervicio;

    this.tiposervicioservice.insertartiposervicio(this.tiposervicio).subscribe(res=> {
      
      console.log(res);
      this.router.navigateByUrl('/perfil');
      
      
    },
      err=> console.error(err)
    );
  }

  editar(){
    this.tiposervicioservice.editartiposervicio(this.tiposervicio.idtiposervicio, this.tiposervicio).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/editar_tiposervicio');
    },
      err => console.log(err)
    );
  }





}
