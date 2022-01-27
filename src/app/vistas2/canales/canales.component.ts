import { Component, OnInit } from '@angular/core';
import { MenuComponent } from 'src/app/barra-Navegacion/barra-Navegacion.component';

@Component({
  selector: 'app-listado',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css']
})
export class ListadoComponent implements OnInit {
  //esto es para los mensajes emergentes.
  static flag1:boolean;
  public flag1=false;
  static flag2:boolean;
  public flag2=true;
  
  constructor() {
    
  }

  ngOnInit(): void {


  }


  public animation() {
    window.scrollTo({
      //top: 950,
      top: 1450,
      left: 100,
      behavior: 'smooth'
    });
  }


public abrirMensajeCondiciones(){

this.flag1=true;

}

public cerrarMensajeCondiciones(){

  this.flag1=false;
  
  }

  public cerrarMensajeCookies(){

    this.flag2=false;
    
    }


}
