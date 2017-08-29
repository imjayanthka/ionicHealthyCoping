import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ExercisePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {
  exerciseData;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder:FormBuilder) {
    this.exerciseData = this.formBuilder.group({
      exercise:['', Validators.required],
      duration: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      calories: ['', Validators.required],
      notes: [],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }
  checkInformation(){
    console.log(this.exerciseData);
  }
}
