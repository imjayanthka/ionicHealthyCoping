import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { DataEntryPage } from "../data-entry/data-entry"
import { Hba1cPage } from "../hba1c/hba1c"
import { WeightPage } from "../weight/weight"
import * as HighCharts from 'highcharts';

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }


    // // create(component, data, opts)
    // let popover = this.popoverCtrl.create(DataEntryPage);
    // popover.present({
    //   ev: myEvent
    // });

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    var myChart = HighCharts.chart('container', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    });
  }

  openDataEntryPage() {
    this.navCtrl.push(DataEntryPage);
  }

  openHba1cPage() {
    this.navCtrl.push(Hba1cPage);
  }

  // openDataEntryPage() {
  //   // // create(component, data, opts)
  //   // let popover = this.popoverCtrl.create(DataEntryPage);
  //   // popover.present({
  //   //   ev: myEvent
  //   // });
  //   this.navCtrl.push(DataEntryPage);
  // }

  // openDataEntryPage() {
  //   // // create(component, data, opts)
  //   // let popover = this.popoverCtrl.create(DataEntryPage);
  //   // popover.present({
  //   //   ev: myEvent
  //   // });
  //   this.navCtrl.push(DataEntryPage);
  // }

  // openDataEntryPage() {
  //   // // create(component, data, opts)
  //   // let popover = this.popoverCtrl.create(DataEntryPage);
  //   // popover.present({
  //   //   ev: myEvent
  //   // });
  //   this.navCtrl.push(DataEntryPage);
  // }

  // openDataEntryPage() {
  //   // // create(component, data, opts)
  //   // let popover = this.popoverCtrl.create(DataEntryPage);
  //   // popover.present({
  //   //   ev: myEvent
  //   // });
  //   this.navCtrl.push(DataEntryPage);
  // }

}
