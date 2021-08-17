import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Asistencia } from 'src/app/models/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';
@Component({
  selector: 'app-stathorarios',
  templateUrl: './stathorarios.component.html',
  styleUrls: ['./stathorarios.component.css']
})
export class StathorariosComponent implements OnInit {

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
 public barChartLabels: Label[]=['6 hs', '7 hs', '8 hs','9 hs', '10 hs', '11 hs','12 hs', '13 hs', '14 hs','15 hs', '16 hs', '17 hs','18 hs', '19 hs', '20 hs','21 hs', '22 hs', '23 hs','0 hs', '1 hs', '2 hs','3 hs', '4 hs', '5 hs',];
  //Tipo de grafico que queremos: ejem: line, bar, radar
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  //Datos que vamos a cargar en las graficas 
  public barChartData: ChartDataSets[];
  public chartColors;


  //Arreglo de los datos que vamos a pasar
  private datos = [];
  //Arreglo de las categorias que vamos a pasar
  private nombreCategoria = ['Alumnos'];
  //Arreglo de los colores que vamos a pasar
  private colores = [];
  asistencias:Array<Asistencia>;
  labelsHora:Array<Label>;
  constructor( private asistenciaService:AsistenciaService) {
    this.getAsistencias();
  }
  generar(){
        this.colores=['rgba(0,255,0,0.5)'];
        this.barChartData = [];
        this.chartColors = [];
        for (const index in this.datos) {
          this.barChartData.push({ data: this.datos[index], label: this.nombreCategoria[index] });
          this.chartColors.push({backgroundColor: this.colores[index]});
        }
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
        this.getLabels();
      },
      error=>{
   
      }
    )
  }
  getLabels(){
    //labels para la grafica
    this.labelsHora=new Array<string>();
    //obtiene todas las horas en las q asistio algun alumno
    for(let a of this.asistencias ){
      this.labelsHora.push(a.hora.split(':')[0]);
    }
    //ordena las horas
    this.labelsHora=this.labelsHora.sort();
    this.obtenerDatos();
  }

  obtenerDatos(){
    let count:Array<number>=new Array<number>();
    this.labelsHora=['06', '07', '08','09', '10', '11','12', '13', '14','15', '16', '17','18', '19', '20','21', '22', '23','00', '01', '02','03', '04', '05',];
    for(let a of this.asistencias){
      for(let i=0; i< this.labelsHora.length;i++){
        //inicia los contadores en 0
        if (count[i]==null){
          count[i]=0;
        }
        if(a.hora.split(':')[0]==this.labelsHora[i]){
          count[i]+=1;
        }
      }
    }
    //convierte los contadores en array de string
    for(let i=0; i< count.length;i++){
      this.datos.push(count[i].toString());
    }
    this.generar();
  }

  ngOnInit() {
  }
}
