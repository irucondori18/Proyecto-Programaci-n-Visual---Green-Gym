import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookModule } from 'ngx-fb';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { StatplanComponent } from './components/statplan/statplan.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';
import { StatasistenciasComponent } from './components/statasistencias/statasistencias.component';
import { StathorariosComponent } from './components/stathorarios/stathorarios.component';
import * as printJS from 'print-js';
import { TablaSliderComponent } from './components/tabla-slider/tabla-slider.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { NgxDataTableModule} from "angular-9-datatable";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { LoginService } from './services/login/login.service';
import { ControlPeso, ControlDuracion, ControlSeriesRep, ControlMonto,
ControlMontoDecimales, ControlDni, ControlEmail, ControlCelular} from './directivas/validacion.directive';
import { NgxPrintModule } from 'ngx-print';
import { TraducirBoolPipe } from './pipes/traducir-bool.pipe';
// importamos la librería HTTP_INTERCEPTOR
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './services/login/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IngresoComponent,
    HomeComponent,
    LoginComponent,
    AlumnoComponent,
    TablaAlumnosComponent,
    EstadisticasComponent,
    StatplanComponent,
    StatasistenciasComponent,
    StathorariosComponent,
    TablaSliderComponent,
    AlumnoFormComponent,
    ControlPeso,
    ControlDuracion,
    ControlSeriesRep,
    ControlMonto,
    ControlDni,
    ControlMontoDecimales,
    ControlEmail,
    ControlCelular,
    TraducirBoolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ColorPickerModule,
    ChartsModule,
    NgxDataTableModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AlifeFileToBase64Module,
    FacebookModule.forRoot(),
    NgxPrintModule,
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
