import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './vistas2/canales/canales.component';
import { AcercaDeNosotrosComponent } from './vistas2/acerca-de-nosotros/acerca-de-nosotros.component';
import { AreaUsuarioComponent } from './vistas2/area-usuario/area-usuario.component';
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component';
//se importa solo como dice abajo
import { LoginComponent } from './vistas2/login/login.component';
import { RegisterComponent } from './vistas2/register/register.component';

const routes: Routes = [

{ path: 'listado',component: ListadoComponent },
{ path: 'nosotros', component: AcercaDeNosotrosComponent},
{ path: 'miArea', component: AreaUsuarioComponent},
{ path: 'registro', component: RegisterComponent},
{ path: 'login', component: LoginComponent},

{ path: '',redirectTo:'/', pathMatch:'full'},
{ path: '**',component: PaginaNoEncontradaComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
