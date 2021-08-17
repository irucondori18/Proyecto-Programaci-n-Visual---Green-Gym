import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login/login.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: Usuario = new Usuario(); //usuario mapeado al formulario
  returnUrl: string;
  msglogin: string; // mensaje que indica si no paso el loguin
  home:AppComponent = new AppComponent();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private toast:ToastrService) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login() {
    this.loginService.login(this.userform.usuario, this.userform.password)
      .subscribe(
        (result) => {
          var user = result;
          if (user.status == 1) {
            //guardamos el user en cookies en el cliente
            sessionStorage.setItem("user", user.usuario);
            sessionStorage.setItem("perfil", user.perfil);
            sessionStorage.setItem("user_id", user._id);
            sessionStorage.setItem("token", user.token);
            //redirigimos a home o a pagina que llamo
            this.router.navigateByUrl(this.returnUrl)
            .then(() => {
              window.location.reload();
            });
            //pruebas
            
            //this.router.navigateByUrl('/DummyComponent');
            //this.router.navigate(["header"]);
            //this.router.navigate(["home"]);
            //this.home.ngOnInit();
          } else {
            //usuario no encontrado muestro mensaje en la vista
            this.toast.warning("Credenciales incorrectas..", "Error")
            //this.msglogin = "Credenciales incorrectas..";
          }
          //this.toast.success("Acceso concedido", "Bienvenido"+sessionStorage.getItem("user"));
          //if(sessionStorage.getItem("perfil")=="alumno"){
          //  this.router.navigateByUrl(this.returnUrl);
         //}
         console.log(result)
        },
        error => {
          alert("Error de conexion");
          console.log("error en conexion");
          console.log(error);
        });
      
  }
}
