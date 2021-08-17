import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor(private loginService:LoginService,
    private router:Router) { 
      if(this.loginService.userLoggedIn()==true){
        if(sessionStorage.getItem("perfil")== "entrenador"){

        }else{
          alert("No posee los permisos necesarios")
        this.router.navigate(['home']);
        }
      }else{
        alert("Debe Loguearse para continuar")
        this.router.navigate(['login']);
      }
    }

  ngOnInit(): void {
    
  
  }

}
