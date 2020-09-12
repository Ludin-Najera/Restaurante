import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { InicioService, UsuariosService, BebidasService, ComplementosService, TiposervicioService } from './services/inicio.service';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { Usuarios2Component } from './components/usuarios2/usuarios2.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { Bebidas2Component } from './components/bebidas2/bebidas2.component';
import { ComplementosComponent } from './components/complementos/complementos.component';
import { Complementos2Component } from './components/complementos2/complementos2.component';
import { TiposervicioComponent } from './components/tiposervicio/tiposervicio.component';
import { Tiposervicio2Component } from './components/tiposervicio2/tiposervicio2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    PerfilComponent,
    UsuariosComponent,
    Usuarios2Component,
    BebidasComponent,
    Bebidas2Component,
    ComplementosComponent,
    Complementos2Component,
    TiposervicioComponent,
    Tiposervicio2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    InicioService,
    UsuariosService,
    BebidasService,
    ComplementosService,
    TiposervicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

