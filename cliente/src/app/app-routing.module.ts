import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { Usuarios2Component } from './components/usuarios2/usuarios2.component';
import { BebidasComponent } from "./components/bebidas/bebidas.component";
import { Bebidas2Component } from "./components/bebidas2/bebidas2.component";
import { ComplementosComponent } from "./components/complementos/complementos.component";
import { Complementos2Component } from "./components/complementos2/complementos2.component";
import { TiposervicioComponent } from './components/tiposervicio/tiposervicio.component';
import { Tiposervicio2Component } from './components/tiposervicio2/tiposervicio2.component';
import { MenuComponent } from './components/menu/menu.component';
import { Menu2Component } from './components/menu2/menu2.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  { 
    path:  'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'crear_usuarios',
    component: UsuariosComponent
  },
  {
    path: 'editar_usuarios',
    component: Usuarios2Component
  },
  {
    path: 'editar_usuarios/:id',
    component: UsuariosComponent
  },
  {
    path: 'crear_bebidas',
    component: BebidasComponent
  },
  {
    path: 'editar_bebidas',
    component: Bebidas2Component
  },
  {
    path: 'editar_bebidas/:idbebidas',
    component: BebidasComponent
  },
  {
    path: 'crear_complementos',
    component: ComplementosComponent
  },
  {
    path: 'editar_complementos',
    component: Complementos2Component
  },
  {
    path: 'editar_complementos/:idcomplementos',
    component: ComplementosComponent
  },
  {
    path: 'crear_tiposervicio',
    component: TiposervicioComponent
  },
  {
    path: 'editar_tiposervicio',
    component: Tiposervicio2Component
  },
  {
    path: 'editar_tiposervicio/:idtiposervicio',
    component: TiposervicioComponent
  },
  {
    path: 'crear_menu',
    component: MenuComponent
  },
  {
    path: 'editar_menu',
    component: Menu2Component
  },
  {
    path: 'editar_menu/:idmenu',
    component: MenuComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
