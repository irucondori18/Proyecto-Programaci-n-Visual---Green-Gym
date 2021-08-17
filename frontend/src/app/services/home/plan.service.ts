import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from 'src/app/models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  urlBase="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getPlanes():Observable<any>{
    const url=this.urlBase+"plan";
    const httpOptions= {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({
        
      })
    }
     return this._http.get(url,httpOptions);
  }

  getPlan(plan:Plan):Observable<any>{
    const url=this.urlBase+"plan/"+plan._id;
    const httpOptions= {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({
        
      })
    }
     return this._http.get(url,httpOptions);
  }

  postPlan(plan:Plan):Observable <any>{
    const url=this.urlBase+"plan";
    const httpOptions= {
      headers: new HttpHeaders({
  
      }),
      params: new HttpParams({
        
      })
    }
    let body=plan;
    return this._http.post(url,body,httpOptions);

  }
  
  deletePlan(plan:Plan):Observable <any>{
    const url=this.urlBase+"plan/"+plan._id;
    const httpOptions= {
      headers: new HttpHeaders({
  
      }),
      params: new HttpParams({
        
      })
    }
    return this._http.delete(url,httpOptions);

  }

  modificarPlan(plan:Plan):Observable<any>{
    const url="http://localhost:3000/api/plan/"+plan._id;
    const httpOptions= {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({
        
      })
    };
    let body= plan;
    return this._http.put(url,body,httpOptions);

  }
}
