import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { Progreso } from 'src/app/models/progreso';
import { Rutina } from 'src/app/models/rutina';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Usuario } from 'src/app/models/usuario';
import * as printJS from 'print-js';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  ejercicios: Array<Ejercicio> = Array<Ejercicio>();
  ejercicio: Ejercicio = new Ejercicio();
  rutinas: Array<Rutina> = Array<Rutina>();
  rutina: Rutina = new Rutina();
  progreso: Progreso = new Progreso();
  progresos: Array<Progreso> = new Array<Progreso>();
  asistencia: Asistencia = new Asistencia();
  asistencias: Array<Asistencia> = new Array<Asistencia>();
  alumno: Alumno = new Alumno();
  alumnos: Array<Alumno> = new Array<Alumno>();
  pago: Pago = new Pago();
  pagos: Array<Pago> = new Array<Pago>();
  id: string;
  user: string = sessionStorage.getItem("user")
  usernamedisp: boolean;
  pagoImp:Pago = new Pago();
  asistImp: Asistencia = new Asistencia();
  pagoJSON: JSON;
  asistenciaJSON: JSON;

  constructor(private loginService: LoginService,
    private router: Router,
    private alumnoService: AlumnoService,
    private toast: ToastrService) {
      
    if (this.loginService.userLoggedIn() == true) {
      if (sessionStorage.getItem("perfil") == "alumno") {

      } else {
        this.toast.warning("No posee los permisos necesarios", "Error")
        this.router.navigate(['home']);
      }
    } else {
      this.toast.info("Debe loguearse para continuar", "Usuario no identificado")
      this.router.navigate(['login']);
    }
    
  }

  ngOnInit(): void {
    this.getAlumno();

  }

  seleccionar(progreso){
    this.progreso=progreso;
  }

  getAlumno() {
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAlumnoPorUsuario(this.loginService.userLogged()).subscribe(
      result => {
        Object.assign(this.alumno, result);
        this.getPagos(this.alumno[0]._id);
        this.getAsistencias(this.alumno[0]._id);
        this.getProgresos(this.alumno[0]._id);
        this.getRutinas(this.alumno[0]._id);
        this.getEjercicios(this.alumno[0]._id);
      },
      error => {
        this.toast.error("Error al cargar los alumnos", "Operación fallida");
      }
     
    )
    
  }

  getAsistencias(id:string) {
   
    this.asistencias = new Array<Asistencia>();
    this.alumnoService.getAsistencias(id).subscribe(
      result => {
        result.forEach(element => {
          let vAsistencia = new Asistencia();
          Object.assign(vAsistencia, element);
          this.asistencias.push(vAsistencia);
          this.asistenciaJSON = result;
        });
      },
      error=>{
        this.toast.error("Error al cargar las asistencias", "Operación fallida");
      }
    )
  }

  

  getPagos(id: string) {
    this.pagos = new Array<Pago>();
    this.alumnoService.getPagos(id).subscribe(
      result => {
        result.forEach(element => {
          let vPago = new Pago();
          Object.assign(vPago, element);
          this.pagos.push(vPago);
        });
        this.pagoJSON = result;
      },
      error => {
        this.toast.error("Error al cargar los pagos", "Operación fallida");
      }
    )
  }

  getProgresos(id: string) {
    this.progresos = new Array<Progreso>();
    this.alumnoService.getProgresos(id).subscribe(
      result => {
        result.forEach(element => {
          let vProgreso = new Progreso();
          Object.assign(vProgreso, element);
          this.progresos.push(vProgreso);
        });
      },
      error => {
        this.toast.error("Error al cargar los progresos", "Operación fallida");
      }
    )
  }

  getRutinas(user: string) {
    this.rutinas = new Array<Rutina>();
    this.alumnoService.getRutinas(user).subscribe(
      result => {
        result.forEach(element => {
          let vRutina = new Rutina();
          Object.assign(vRutina, element);
          this.rutinas.push(vRutina);
        });
      },
      error => {
        this.toast.error("Error al cargar las rutinas", "Operación fallida");
      }
    )
  }

  getEjercicios(idRutina: string) {
    this.ejercicios = new Array<Ejercicio>();
    this.alumnoService.getEjercicios(this.alumno[0]._id, idRutina).subscribe(
      result => {
        result.forEach(element => {
          let vEjercicio = new Ejercicio();
          Object.assign(vEjercicio, element);
          this.ejercicios.push(vEjercicio);
        });
      },
      error => {
        this.toast.error("Error al cargar los ejercicios", "Operación fallida");
      }
    )
  }


  //modales
  usarRutinaSeleccionada(rutina:Rutina){
    this.rutina=rutina;
  }

  usarPagoImprimir(pago:Pago){
    this.pagoImp=pago;
  }

  usarAsistenciaImprimir(asistencia:Asistencia){
    this.asistImp=asistencia;
  }

  imprimirAsistencias(){
    printJS({
      printable: this.asistenciaJSON,
      properties: [
        { field: 'fecha', displayName: 'Fecha de asistencia'},
        { field: 'hora', displayName: 'Hora de asistencia'}
      ],
      header: '<h1 class="titulo">Green Gym<br>Todas tus asistencias</h1>',
      style: '.titulo {text-align: center; color: #2ec400; font: helvetica neue}',
      documentTitle: 'Mis Asistencias',
      type: 'json',


    })
  }

  imprimirPagos(){
    printJS({
      printable: this.pagoJSON,
      properties: [
        { field: 'monto', displayName: 'Monto'},
        { field: 'fechapago', displayName: 'Fecha de pago'},
        { field: 'modopago', displayName: 'Medio de pago'},
        { field: 'fechavencimiento', displayName: 'Próximo vencimiento'},
        { field: 'completado', displayName: 'Estado del pago'},

      ],
      header: '<h1 class="titulo">Green Gym<br>Todos tus pagos</h1>',
      style: '.titulo {text-align: center; color: #2ec400; font: helvetica neue}',
      documentTitle: 'Mis Pagos',
      type: 'json',


    })
  }

}