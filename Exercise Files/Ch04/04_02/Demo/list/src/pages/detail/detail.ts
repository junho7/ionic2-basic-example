import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  cat = {
    name:"",
    id:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let catId = navParams.data.cat;
    this.cat.name = catId;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
