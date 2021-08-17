import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Alumno } from 'src/app/models/alumno';
import { Plan } from 'src/app/models/plan';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { PlanService } from 'src/app/services/home/plan.service';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-statplan',
  templateUrl: './statplan.component.html',
  styleUrls: ['./statplan.component.css']
})
export class StatplanComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['cantidad de personas'];
  //Tipo de grafico que queremos: ejem: line, bar, radar
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //Datos que vamos a cargar en las graficas 
  public barChartData: ChartDataSets[];
  public chartColors;
  //Arreglo de los datos que vamos a pasar
  private datos = [];
  //Arreglo de las categorias que vamos a pasar
  private nombreCategoria = [];
  //Arreglo de los colores que vamos a pasar
  private colores = [];
  alumnos:Array<Alumno>=new Array<Alumno>();
  planes:Array<Plan> = new Array<Plan>();
  constructor(private alumnoService:AlumnoService,private planService:PlanService) {
    this.getAlumnos();
  }

  ngOnInit() {

  }

  generarEstadisticas(){
    this.nombreCategoria=[];
    this.datos=[];
    for(let p of this.planes){
      this.nombreCategoria.push(p.tipo);
    }
    this.obtenerDatos();
    this.datos.push(['0']);
    this.colores=['rgba(255,0,0,0.7)','rgba(0,255,0,0.7)','rgba(0,0,255,0.7)','rgba(255,255,0,0.7)','rgba(0,255,255,0.7)','rgba(255,0,255,0.7)'];
    this.barChartData = [];
    this.chartColors = [];
    
    for (const index in this.datos) {
      this.barChartData.push({ data: this.datos[index], label: this.nombreCategoria[index] });
      this.chartColors.push({backgroundColor: this.colores[index]});
    }
  }
  obtenerDatos(){
    let count:Array<number>=new Array<number>();
    for(let a of this.alumnos){
      if( a.plan!=null){
        for(let i=0; i< this.nombreCategoria.length;i++){
          //inicia los contadores en 0
          if (count[i]==null){
            count[i]=0;
          }
          if(a.plan.tipo==this.nombreCategoria[i]){
            count[i]+=1;
          }
        }
      }
    }
    //convierte los contadores en array de string
    for(let i=0; i< count.length;i++){
      this.datos[i]=[count[i].toString()];
    }
  }
  getAlumnos(){
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAllAlumnos().subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno = new Alumno();
          Object.assign(vAlumno,element);
          this.alumnos.push(vAlumno);
        });
        this.getPlanes();
      },
      error=>{
        
      }
    )
  }
  getPlanes(){
    this.planes = new Array<Plan>();
    this.planService.getPlanes().subscribe(
      result=>{

        result.forEach(element => {
          let vPlan = new Plan();
          Object.assign(vPlan,element);
          this.planes.push(vPlan);
        });
        this.generarEstadisticas();
      },
      error=>{
        
      }
    )
  }
}







  
