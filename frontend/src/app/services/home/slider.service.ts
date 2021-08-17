import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/models/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  urlBase="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getSliders():Observable<any>{
    const url=this.urlBase+"slider";
    const httpOptions= {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({
        
      })
    }
     return this._http.get(url,httpOptions);
  }

  getSlider(slider:Slider):Observable<any>{
    const url=this.urlBase+"slider/"+slider._id;
    const httpOptions= {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({
        
      })
    }
     return this._http.get(url,httpOptions);
  }

  postSlider(slider:Slider):Observable <any>{
    const url=this.urlBase+"slider";
    const httpOptions= {
      headers: new HttpHeaders({
  
      }),
      params: new HttpParams({
        
      })
    }
    let body=slider;
    return this._http.post(url,body,httpOptions);

  }
  deleteSlider(slider:Slider):Observable <any>{
    const url=this.urlBase+"slider/"+slider._id;
    const httpOptions= {
      headers: new HttpHeaders({
  
      }),
      params: new HttpParams({
        
      })
    }
    return this._http.delete(url,httpOptions);

  }
  modificarSlider(slider:Slider):Observable<any>{
    const url="http://localhost:3000/api/slider/"+slider._id;
    const httpOptions= {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({
        
      })
    };
    let body= slider;
    return this._http.put(url,body,httpOptions);

  }
 
}
