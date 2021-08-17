import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Asistencia } from 'src/app/models/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-statasistencias',
  templateUrl: './statasistencias.component.html',
  styleUrls: ['./statasistencias.component.css']
})
export class StatasistenciasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Dia de la Semana'];
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
  asistencias:Array<Asistencia>;
  dias=[0,1,2,3,4,5,6];
  constructor(private asistenciaService:AsistenciaService) {
    this.getAsistencias();
  }
  getAsistencias(){
    this.asistencias = new Array<Asistencia>();
    this.asistenciaService.getAllAsistencias().subscribe(
      result=>{
          result.forEach(element => {
          let vAsistencia = new Asistencia();
          Object.assign(vAsistencia,element);
          this.asistencias.push(vAsistencia);
        });
        this.obtenerDatos();
      },
      error=>{
      }
    )
  }
 obtenerDatos(){
    let count:Array<number>=new Array<number>();
    for(let a of this.asistencias){
      for(let i=0; i< this.dias.length;i++){
        //inicia los contadores en 0
        if (count[i]==null){
          count[i]=0;
        }
        if(new Date(a.fecha).getDay()==this.dias[i]){
          count[i]+=1;
        }
      }
    }
    //convierte los contadores en array de string
    for(let i=0; i< count.length;i++){
      this.datos.push([count[i].toString()]);
    }
    this.generar();
  }
  generar(){
    this.nombreCategoria=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    this.colores=['rgba(255,0,0,0.7)','rgba(0,255,0,0.7)','rgba(0,0,255,0.7)','rgba(255,255,0,0.7)','rgba(0,255,255,0.7)','rgba(255,0,255,0.7)','rgba(255,150,150,0.7)',];
    this.barChartData = [];
    this.chartColors = [];
    for (const index in this.datos) {
      this.barChartData.push({ data: this.datos[index], label: this.nombreCategoria[index] });
      this.chartColors.push({backgroundColor: this.colores[index]});
    }
}
  ngOnInit() {
  }
}
