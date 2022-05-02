import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { JobServiceProvider } from '../../providers/job-service/job-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title="Countertops"

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: JobServiceProvider) {
  }

  loadJobs() {
    return this.dataService.getJobs();
  }

  loadUsers() {
    return this.dataService.getUsers();
  }
}