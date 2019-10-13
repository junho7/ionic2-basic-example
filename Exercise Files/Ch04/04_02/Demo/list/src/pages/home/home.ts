import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cats = new Array();
  private detailPage;

  constructor(public navCtrl: NavController) {
    this.cats.push({name:"Lord Fluffypants the Third",id:1});
    this.cats.push({name:"Princess Thorhammer",id:2});
    this.cats.push({name:"Pickle King the Moon",id:3});

    this.detailPage = DetailPage;
  }

  loadDetail(cat) {
    this.navCtrl.push(this.detailPage, {cat:cat.id});
  }

}
