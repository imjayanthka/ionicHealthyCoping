import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


/**
 * Generated class for the Hba1cPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hba1c',
  templateUrl: 'hba1c.html',
})
export class Hba1cPage {
  hba1cData;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.hba1cData = this.formBuilder.group({
      date: ['', Validators.required],
      hba1cReadings: ['', Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hba1cPage');
  }

  checkInformation(){
    console.log(this.hba1cData)
  }

}
