import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './barra-Navegacion/barra-Navegacion.component';
import { ListadoComponent } from './vistas2/canales/canales.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './vistas2/acerca-de-nosotros/acerca-de-nosotros.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './vistas2/login/login.component';
import { AreaUsuarioComponent } from './vistas2/area-usuario/area-usuario.component';
import { RegisterComponent } from './vistas2/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    PaginaNoEncontradaComponent,
    AcercaDeNosotrosComponent,
    LoginComponent,
    AreaUsuarioComponent,
    RegisterComponent
  ],
  imports: [
    //si ponemos aqui los nombres directamente nos lo importa arriba de forma
    //automatica.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
