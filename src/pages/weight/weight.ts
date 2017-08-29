import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the WeightPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {
  weightData
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder:FormBuilder) {
    this.weightData = this.formBuilder.group({
      weight: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],
      bmi: [''],
      notes: [''],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeightPage');
  }

  checkInformation(){
    console.log(this.weightData)
  }

}
