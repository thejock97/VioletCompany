import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    //Iniciamos el botón a disabled por defecto
    (<HTMLButtonElement>document.getElementById('btRegister')).disabled=true;
  
  }

  public checkDetection(){
  
  //Si el check box esta seleccionado
  if ((<HTMLInputElement>document.getElementById('form2Example3c')).checked){
  
    (<HTMLButtonElement>document.getElementById('btRegister')).disabled=false;
    
       }else{
        
        (<HTMLButtonElement>document.getElementById('btRegister')).disabled=true;
        }
      
  }

  public register(){
    this.router.navigate(['/login']);  // define your component where you want to go
}

  

}
