import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Pago } from 'src/app/models/pago';
import { Progreso } from 'src/app/models/progreso';
import { Rutina } from 'src/app/models/rutina';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private _http:HttpClient) { }

  urlbase:string="http://localhost:3000/api/";

  getAllAlumnos():Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno", option);
   }

   getAlumnoByDNI(dni:number):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/dni/"+dni, option); 
   }

   addAlumno(alumno:Alumno):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(alumno);
    return this._http.post(this.urlbase+"alumno", body, option);
   }

   updateAlumno(alumno: Alumno):Observable<any>{
     let option = {
       headers: new HttpHeaders({
         "Content-Type": "application/json"
       }),
       params: new HttpParams({

       })
     }
     let body = JSON.stringify(alumno);
     return this._http.put(this.urlbase + "alumno/" + alumno._id, body, option);
   }

   getAlumno(id:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+id, option); 
   }

   //usuario
   addUsuario(idAlumno: string, usuario: Usuario):Observable<any>{
     let option = {
       headers: new HttpHeaders({
         "Content-Type": "application/json"
       }),
       params: new HttpParams({

       })
     }
     let body = JSON.stringify(usuario);
     return this._http.post(this.urlbase + "alumno/" + idAlumno + "/usuario", body, option);
   
   
    }

    updateUsuario(usuario: Usuario):Observable<any>{
      let option = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        }),
        params: new HttpParams({
 
        })
      }
      let body = JSON.stringify(usuario);
      return this._http.put(this.urlbase + "usuarios/edit/" + usuario._id, body, option);
    
    
     }

     deleteUsuario(idUsuario:string):Observable<any>{
      let option = {
        headers: new HttpHeaders({

        }),
        params: new HttpParams({
  
        })
      }
      return this._http.delete(this.urlbase+"usuarios/" + idUsuario, option);
     }

   //asistencias
   addAsistencia(idAlumno:string, asistencia:Asistencia):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(asistencia);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/asistencias", body, option);
   }

   getAsistencia(idAsistencia:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"asistencia/asistencias/"+idAsistencia, option); 
   }

   getAsistencias(id:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+id+"/asistencias", option);
    
   }

   updateAsistencia(asistencia:Asistencia):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(asistencia);
    return this._http.put(this.urlbase+"asistencia/asistencias/"+asistencia._id, body, option);
  }

  deleteAsistencia(idAsistencia:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.delete(this.urlbase+"asistencia/"+idAsistencia, option);
   }

   //Pagos

   getPagos(id: string):Observable<any>{
     let option = {
       headers: new HttpHeaders({

       }),
       params: new HttpParams({

       })
     }
     return this._http.get(this.urlbase + "alumno/" + id + "/pagos", option);
   }

   addPago(idalumno: string, pago:Pago):Observable<any>{
     let option = {
       headers: new HttpHeaders({
        "Content-Type": "application/json"
       }),
       params: new HttpParams({

       })
     }
     let body = JSON.stringify(pago);
     return this._http.post(this.urlbase + "alumno/" + idalumno + "/pagos", body, option);
   }

   getPago(idPago:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"pago/pagos/"+idPago, option); 
   }
   
   updatePago(pago:Pago):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(pago);
    return this._http.put(this.urlbase+"pago/pagos/"+pago._id, body, option);
  }

  deletePago(idPago:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.delete(this.urlbase+"pago/"+idPago, option);
   }


   //progresos
   addProgreso(idAlumno:string, progreso:Progreso):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(progreso);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/progresos", body, option);
   }

   getProgresos(idAlumno:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/progresos", option);
   }

   getProgreso(idAlumno:string, idProgreso:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/progresos/"+idProgreso, option); 
   }

   updateProgreso(idAlumno:string, progreso:Progreso):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(progreso);
    return this._http.put(this.urlbase+"alumno/"+idAlumno+"/progresos/"+progreso._id, body, option);
  }

  deleteProgreso(idAlumno:string, idProgreso:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.delete(this.urlbase+"alumno/"+idAlumno+"/progresos/"+idProgreso, option);
   }


   //rutinas
   addRutina(idAlumno:string, rutina:Rutina):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(rutina);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/rutinas", body, option);
   }

   getRutinas(usuario:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+usuario+"/rutinas", option);
   }

   
   getRutina(idAlumno:string, idRutina:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina, option); 
   }

   updateRutina(idAlumno:string, rutina:Rutina):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(rutina);
    return this._http.put(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+rutina._id, body, option);
  }

  deleteRutina(idAlumno:string, idRutina:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.delete(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina, option);
   }


   //ejercicios
   getEjercicios(idAlumno:string, idRutina):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina+"/ejercicios", option);
   }

   getEjercicio(idAlumno:string, idRutina:string, idEjercicio:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina+"/ejercicios/"+idEjercicio, option); 
   }

   addEjercicio(idAlumno:string, idRutina:string, ejercicio:Ejercicio):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(ejercicio);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina+"/ejercicios", body, option);
   }

   updateEjercicio(idAlumno:string, idRutina:string, ejercicio:Ejercicio):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(ejercicio);
    return this._http.put(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina+"/ejercicios/"+ejercicio._id, body, option);
  }

  deleteEjercicio(idAlumno:string, idRutina:string, idEjercicio:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.delete(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina+"/ejercicios/"+idEjercicio, option);
   }

   verificarUsuario(usuario: string){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = { usuario: usuario};
    return this._http.post(this.urlbase + "usuarios/nombre", body, httpOption);
   }

   getAlumnoPorUsuario(usuario:string){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get(this.urlbase + 'alumno/usuario/'+usuario, httpOption);
   }

   getUsuarioPorAlumno(id: string):Observable<any>{
    let option = {
      headers: new HttpHeaders ({

      }),
      params: new HttpParams ({

      })
    }
    return this._http.get(this.urlbase + "usuarios/" + id, option);
  }
    /*let option = {
      headers: new HttpHeaders ({

      }),
      params: new HttpParams ({

      })
    }
    return this._http.get(this.urlbase + "alumno/buscar/" + id, option);
   }*/
}
