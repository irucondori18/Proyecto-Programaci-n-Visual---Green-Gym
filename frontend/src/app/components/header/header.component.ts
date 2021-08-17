import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  perfil:string;
  usuario:string;

  constructor(public loginService: LoginService) {
    this.usuario = loginService.userLogged();
    //console.log(this.usuario);
    
 }

  ngOnInit(): void {
    this.perfil = sessionStorage.getItem("perfil");
  }




  logout(){
    this.loginService.logout(); 
  }
}
