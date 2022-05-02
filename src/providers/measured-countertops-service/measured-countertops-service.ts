import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import { Subject } from 'rxjs';
//import {Subject} from 'rxjs';

  @Injectable()
  export class MeasuredCountertopsServiceProvider {
  
    countertops: any = [];
    dataChanged$: Observable<boolean>;
  
    private dataChangeSubject: Subject<boolean>;
  
    baseURL = "https://countertoptool.azurewebsites.net/";

    constructor(public http: HttpClient) {
      console.log('Hello MeasuredCountertopsServiceProvider Provider');
  
      this.dataChangeSubject = new Subject<boolean>();
      this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
  
    
    getCountertops() {
      return new Promise(resolve => {
        this.http.get(this.baseURL+'/api/countertops').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }

    private extractData(res: Response){
      let body = res;
      return body || [];
    }
  
    private handleError(error: Response | any){
      let errorMsg: string;
      if (error instanceof Response) {
        const err = error || '';
        errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;      
      } else {
        errorMsg = error.message ? error.message : error.toString();
      }
      console.error(errorMsg);
      return Observable.throw(errorMsg);
    }

    addCountertop(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.baseURL+'/api/countertops', JSON.stringify(data))
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  }