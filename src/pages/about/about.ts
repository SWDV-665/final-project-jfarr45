import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeasuredCountertopsServiceProvider } from '../../providers/measured-countertops-service/measured-countertops-service';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  name = 'Angular';

  finishes:string[] =['Finish', 'Raw'];
  endsplash:string[] =['Yes', 'No'];
  countertop_types:string[] =['Straight', 'Lshape Left', 'Lshape Right', 'Ushape'];
  
    profileForm = new FormGroup({
    unit_number :new FormControl(''),
  
    left_wall_length :new FormControl(''),
    left_wall_depth :new FormControl(''),
    back_wall_length :new FormControl(''),
    back_wall_depth :new FormControl(''),
    right_wall_length :new FormControl(''),
    right_wall_depth :new FormControl(''),
    left_finish :new FormControl(''),
    left_endsplash :new FormControl(''),
    right_finish :new FormControl(''),
    right_endsplash :new FormControl(''),
    });
  
    countertop = {
      unit_number :'',
      left_wall_length :'',
      left_wall_depth :'',
      back_wall_length :'',
      back_wall_depth :'',
      right_wall_length :'',
      right_wall_depth :'',
      left_finish :'',
      left_endsplash :'',
      right_finish :'',
      right_endsplash :'',
    }
  
    constructor(private fb: FormBuilder, public dataService: MeasuredCountertopsServiceProvider) {
      this.profileForm= new FormGroup({
  
        countertop_type:new FormControl(''),
        unit_number :new FormControl(''),
      
        left_wall_length :new FormControl(''),
        left_wall_depth :new FormControl(''),
        back_wall_length :new FormControl(''),
        back_wall_depth :new FormControl(''),
        right_wall_length :new FormControl(''),
        right_wall_depth :new FormControl(''),
        left_finish :new FormControl(''),
        left_endsplash :new FormControl(''),
        right_finish :new FormControl(''),
        right_endsplash :new FormControl(''),
    
      });

      this.addCountertop();
    }

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
    }

    addCountertop() {
      this.dataService.addCountertop(this.countertop).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      })
      this.profileForm.reset();
      alert("Countertop measured.")
    }
  
  
  }
