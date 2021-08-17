import { Asistencia } from "./asistencia";
import { Pago } from "./pago";
import { Plan } from "./plan";
import { Progreso } from "./progreso";
import { Rutina } from "./rutina";
import { Usuario } from "./usuario";

export class Alumno {
  _id:string;
  apellido:string;
  nombre:string;
  dni:number;
  fechanac:string;
  celular:string;
  domicilio:string;
  email:string;
  fechainicio:string;
  plan:Plan;
  usuario:Usuario;
  pagos:Array<Pago>;
  asistencias:Array<Asistencia>;
  progresos:Array<Progreso>;
  rutinas:Array<Rutina>;

  constructor(){
    this.pagos= new Array<Pago>();
    this.asistencias = new Array<Asistencia>();
    this.progresos = new Array<Progreso>();
    this.rutinas = new Array<Rutina>();
  }
}
