import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { Slider } from 'src/app/models/slider';
import { PlanService } from 'src/app/services/home/plan.service';
import { SliderService } from 'src/app/services/home/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  planes: Array<Plan> = new Array<Plan>();
  sliders: Array<Slider> = new Array<Slider>();

  constructor(private planService:PlanService,private sliderService:SliderService,private router:Router) { }

  ngOnInit(): void {
    this.getPlanes();
    this.getSliders();
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
      },
      error=>{
       
      }
    )
  }
  getSliders(){
    this.sliders = new Array<Slider>();
    this.sliderService.getSliders().subscribe(
      result=>{
        result.forEach(element => {
          let vSlider = new Slider();
          Object.assign(vSlider,element);
          this.sliders.push(vSlider);
        });
      },
      error=>{
        
      }
    )
  }

  
}
