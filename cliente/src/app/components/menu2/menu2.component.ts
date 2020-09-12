import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { MenuService } from '../../services/inicio.service';
import { menu1 } from '../../models/menu';


@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  @HostBinding('class') classes = 'row';
  
  menu: any = [];
  
  constructor(private menuservice: MenuService) { }

  ngOnInit() {
    this.actualizar();
  }


  actualizar(){
    this.menuservice.getmenus().subscribe(
      res => {
        this.menu = res;
      },
        
      err => console.error(err)
    );
  }

  eliminarmenu(idmenu: string){
    this.menuservice.eliminarmenu(idmenu).subscribe(
      res => {
        console.log(res)
        this.actualizar();
      },
      err => console.log(err)
    );
  }

  editarmenu(idmenu: string){
    console.log(idmenu);
  }



}
