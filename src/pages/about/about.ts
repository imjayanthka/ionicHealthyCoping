import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  datas;
  constructor(public navCtrl: NavController) {
    this.datas = [
      {
        goal: "Blood Glucose",
        average: "140",
        target: "130"
      },
      {
        goal: "HbA1c",
        average: "10",
        target: "7"
      },
      {
        goal: "Excersie",
        average: "40",
        target: "30"
      },
      {
        goal: "Social Activity",
        average: "30",
        target: "40"
      }
    ]
  }

}
