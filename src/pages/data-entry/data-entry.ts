import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the DataEntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-entry',
  templateUrl: 'data-entry.html',
})
export class DataEntryPage {
  public bgData;
  public meals = [
    {
      title: "Pre-Breakfast",
      value: "pb"
    },
    {
      title: "Post-Breakfast",
      value: "posb"
    },
    {
      title: "Pre-Lunch",
      value: "pl"
    },
    {
      title: "Post-Lunch",
      value: "posl"
    },
    {
      title: "Pre-Dinner",
      value: "pd"
    },
    {
      title: "Post-Dinner",
      value: "posd"
    }]

  public exercise = [
    {
      title: "Before Exercise",
      value: "be"
    },
    {
      title: "After Exercise",
      value: "ae"
    },
    {
      title: "No Exercise",
      value: "ne"
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder ) {
    this.bgData = this.formBuilder.group({
      bgReadings: ['', Validators.required],
      bgType: ['mmol'],
      date: ['', Validators.required],
      time: ['', Validators.required],
      meal: ['', Validators.required],
      exercise: ['', Validators.required],
      notes: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataEntryPage');
  }

  checkInformation(){
    console.log(this.bgData)
  }

}
