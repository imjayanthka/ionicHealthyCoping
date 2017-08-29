import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the SocialActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-activity',
  templateUrl: 'social-activity.html',
})
export class SocialActivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private forn) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialActivityPage');
  }

}
