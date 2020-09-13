import { Component, OnInit } from '@angular/core';
import { menu1 } from '../../models/menu';
import { MenuService } from '../../services/inicio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  complementos:string[]=["Ensalada Verde","Ensalada de repollo","Papa al Horno","Pure de papa","Papa frita grande","Papa frita mediana","Papa frita pequeña","Helado","Pie de piña","Hershey pie","Aros de cebolla"];
  bebidas:string[]=["Coca Cola","Sprite","Fanta Uva","Fanta Naranja","Coca Cola Zero","Agua Pura","Frezca","Fuze Tea Durazno","Fuze Tea Mango","Fuze Tea Manzana","Agua Mineral","Coca Cola Ligth"];
  tiposervicio:string[]=["Desayuno","Almuerzo","Cena"];
  selcomplementos:string[]=[];
  selbebidas:string[]=[];
  seltiposervicio:string[]=[];

  menu: menu1 = {
    idmenu: 0,
    nombre: '',
    descripcion: '',
    precio: '',
    idcomplementos: '',
    idbebidas: '',
    idtiposervicio: '',
  };

edit: boolean = false;

  constructor(private menuservice: MenuService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit(){

    const params = this.activedroute.snapshot.params;
    console.log(params);
     if(params.idmenu){
      this.menuservice.getmenu(params.idmenu).subscribe(res=> {
        console.log(res);
        this.menu = res;
        this.edit = true;
      }, 
      err => console.error(err)
      );
    }
  }

  registrar(){
    delete this.menu.idmenu;

    this.menuservice.insertarmenu(this.menu).subscribe(res=> {
      
      console.log(res);
      this.router.navigateByUrl('/perfil');
      
      
    },
      err=> console.error(err)
    );
  }

  editar(){
    this.menuservice.editarmenu(this.menu.idmenu, this.menu).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/editar_menu');
    },
      err => console.log(err)
    );
  }






}
