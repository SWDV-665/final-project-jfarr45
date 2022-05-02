import { Injectable } from '@angular/core';

/*
  Generated class for the MeasureServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeasureServiceProvider {
  countertopTypes=[
    {name: "Straight"},
    {name: "L-Shape Right"},
    {name: "L-Shape Left"},
    {name: "U-Shape"},
  ]

  constructor() {
    console.log('Hello MeasureServiceProvider Provider');
  }

  getCountertopTypes() {
    return this.countertopTypes
  }

}
