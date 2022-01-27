import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-usuario',
  templateUrl: './area-usuario.component.html',
  styleUrls: ['./area-usuario.component.css']
})
export class AreaUsuarioComponent implements OnInit {
  public nombreUsuario: string | null;
  
  constructor() { 
    
    this.nombreUsuario = "";
    
  }

  ngOnInit(): void {

   
    
    if (localStorage.getItem('miTokenPersonal')) {
      this.nombreUsuario = localStorage.getItem('nombreUsuario');
    }


  }

 

}
