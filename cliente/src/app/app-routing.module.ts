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
    path: 'editar_complementos/:id',
    component: ComplementosComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
