import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared2/clases2/usuario';
import { LoginService } from 'src/app/shared2/servicios2/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Atributos
  // Atributos
  public usuario: Usuario
  constructor(
    private loginService: LoginService,
    private router: Router) {
    this.usuario = new Usuario();
  }
  ngOnInit(): void {
    

  }
  public submit(): void {
    this.loginService.login(this.usuario).subscribe(
      (data: number) => {
        localStorage.setItem('nombreUsuario', this.usuario.nombre);
        localStorage.setItem('miTokenPersonal', `${data}`);
        //this.router.navigate(['/listado']); esto solo navega pero no refresca la pagina como tal.
        
        //esto de abajo navega hasta el componente listado y entonces refresca la pagina.
  this.router.navigate(['/listado'])
     .then(() => {
       window.location.reload();
     });

      },
      (error: Error) => {
        console.error("Error al realizar el acceso");
      }
    )
  }


}