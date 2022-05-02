import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MeasuredCountertopsServiceProvider } from '../../providers/measured-countertops-service/measured-countertops-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title="Countertops Measured";
  countertops: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: MeasuredCountertopsServiceProvider, public http: HttpClient) {
    this.getCountertops()
  }

  getCountertops() {
    this.dataService.getCountertops()
    .then(data => {
      this.countertops = data;
      console.log(this.countertops);
    })}
  }
