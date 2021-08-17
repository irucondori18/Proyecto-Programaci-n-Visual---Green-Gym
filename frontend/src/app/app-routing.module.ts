import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { LoginComponent } from './components/login/login.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { TablaSliderComponent } from './components/tabla-slider/tabla-slider.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'alumnos',component:TablaAlumnosComponent},
  {path:'login',component:LoginComponent},
  {path:'alumno',component: AlumnoComponent},
  {path:'alumno-form',component: AlumnoFormComponent},
  {path:'estadisticas',component: EstadisticasComponent},
  {path:'alumno-detalles/:id',component: IngresoComponent},
  {path:'configuracion',component: TablaSliderComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
