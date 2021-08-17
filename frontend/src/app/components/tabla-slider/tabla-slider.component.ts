import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/models/plan';
import { Slider } from 'src/app/models/slider';
import { PlanService } from 'src/app/services/home/plan.service';
import { SliderService } from 'src/app/services/home/slider.service';
import { LoginService } from 'src/app/services/login/login.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-fb';
import { ApiMethod } from 'ngx-fb/dist/esm/providers/facebook';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tabla-slider',
  templateUrl: './tabla-slider.component.html',
  styleUrls: ['./tabla-slider.component.css']
})
export class TablaSliderComponent implements OnInit {

  slider: Slider = new Slider();
  sliders: Array<Slider> = new Array<Slider>();
  plan: Plan = new Plan();
  planes: Array<Plan> = new Array<Plan>();

  constructor(private sliderService: SliderService,
    private router: Router,
    private toastr: ToastrService,
    private planService: PlanService,
    private loginService: LoginService,
    private fb: FacebookService) {
    this.iniciarFb();
    this.sliders = new Array<Slider>();
    this.cargarSliders();
    this.planes = new Array<Plan>();
    this.cargarPlanes();
    if (this.loginService.userLoggedIn() == true) {
      if (sessionStorage.getItem("perfil") == "entrenador") {

      } else {
        this.toastr.warning("No posee los permisos necesarios", "Error")
        this.router.navigate(['home']);
      }
    } else {
      this.toastr.info("Debe loguearse para continuar", "Usuario no identificado")
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }
  postFb() {
    var apiMethod: ApiMethod = "post";
    this.fb.api('/108446041487303/feed', apiMethod,
      {
        "message": this.slider.descripcion,
        "access_token": "EAAcRRBuZBYRQBAEHpID26Lu24NV3b7BK6zo2Yx8kBkAk9w4ENDK4tP3BhGfpQor5qZBkZBVYEnVdiKe2C35uUrOvMijZBAalCeHKC4MVzExKGF8ZCT1ugSCWvueLMIPos6ex2T0Ar3LLC319oiCMn1rqG7k4F47zmNIVs4HQGwMjoWLXCcGvWg1KS0DdaBYWfRdzp5sAo0Oiaasffk056XD9vAYhP1r4ZD"
      });
  }
  iniciarFb() {
    let initParams: InitParams = {
      appId: '1989309057884436',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v7.0'
    };
    this.fb.init(initParams);
  }
  seleccionar(slider) {
    this.slider = slider;
  }

  seleccionarPlan(plan) {
    this.plan = plan;
  }

  onFileChanged(e) {
    this.slider.img = e[0].base64;
  }

  //Slider
  agregarSlider(form: NgForm) {
    this.sliderService.postSlider(this.slider).subscribe(
      result => {
        this.toastr.success("El Slider se agregó correctamente", "Operación exitosa");
        this.sliders = new Array<Slider>();
        this.cargarSliders();
        this.postFb();
        form.reset();
        this.slider = new Slider();
      },
      error => {
        this.toastr.error("Error al agregar el slider", "Operación fallida");
      });
  }

  cargarSliders() {
    this.sliderService.getSliders().subscribe(
      result => {
        result.forEach(element => {
          var slider = new Slider();
          Object.assign(slider, element);
          this.sliders.push(slider);
        });
      },
      error => {
        this.toastr.error("Error al cargar los sliders", "Operación fallida");
      }
    )
  }

  eliminarSlider(slider: Slider) {
    this.sliderService.deleteSlider(slider).subscribe(
      result => {
        this.toastr.info("El Slider se eliminó correctamente", "Operación exitosa");
        this.sliders = new Array<Slider>();
        this.cargarSliders();
        this.slider= new Slider();
      },
      error => {
        this.toastr.error("Error al eliminar el slider", "Operación fallida");

      }
    );
  }

  modificarSlider(slider: Slider) {
    this.sliderService.modificarSlider(slider).subscribe(
      result => {
        this.toastr.info("El Slider se modificó correctamente", "Operación exitosa");
        this.sliders = new Array<Slider>();
        this.slider = new Slider();
        this.cargarSliders();
      },
      error => {
        this.toastr.error("Error al modificar el slider", "Operación fallida");

      }
    )
  }

  //Plan
  agregarPlan(form: NgForm) {
    this.planService.postPlan(this.plan).subscribe(
      result => {
        this.toastr.success("El Plan se agregó correctamente", "Operación exitosa");
        this.planes = new Array<Plan>();
        this.plan = new Plan();
        this.cargarPlanes();
        form.reset();
      },
      error => {
        this.toastr.error("Error al agregar el plan", "Operación fallida");

      });
  }

  cargarPlanes() {
    this.planService.getPlanes().subscribe(
      result => {
        result.forEach(element => {
          var plan = new Plan();
          Object.assign(plan, element);
          this.planes.push(plan);

        });
      },
      error => {
        this.toastr.error("Error al cargar los planes", "Operación fallida");
      }
    )
  }

  modificarPlan(plan: Plan) {
    this.planService.modificarPlan(plan).subscribe(
      result => {
        this.toastr.info("El Plan se modificó correctamente", "Operación exitosa");
        this.planes = new Array<Plan>();
        this.plan = new Plan();
        this.cargarPlanes();
      },
      error => {
        this.toastr.error("Error al modificar los planes", "Operación fallida");

      }
    )
  }

  eliminarPlan(plan: Plan) {
    this.planService.deletePlan(plan).subscribe(
      result => {
        this.toastr.info("El Plan se eliminó correctamente", "Operación exitosa");
        this.planes = new Array<Plan>();
        this.cargarPlanes();
        this.plan = new Plan();
      },
      error => {
        this.toastr.error("Error al eliminar el plan", "Operación fallida");

      }
    );
  }

}
