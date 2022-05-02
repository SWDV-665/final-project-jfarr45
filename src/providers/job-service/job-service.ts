import { Injectable } from '@angular/core';

/*
  Generated class for the JobServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobServiceProvider {
  jobs=[ /*LOAD JOBS DATABASE TABLE IN HERE*/
    {name: "Living Word Dream Center"},
    {name: "Shawnee Lofts"}
  ]

  users=[ /*LOAD USERS DATABASE TABLE IN HERE*/
    {name: "Kelsy"}]
  constructor() {
    console.log('Hello JobServiceProvider Provider');
  }

  getJobs() {
    return this.jobs;
  }

  getUsers() {
    return this.users;
  }
}
