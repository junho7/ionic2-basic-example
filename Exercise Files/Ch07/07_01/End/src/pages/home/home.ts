import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { PeopleData } from '../../providers/people-data';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PeopleData]
})
export class HomePage {

  public people = new Array();
  private detailPage;

  constructor(public navCtrl: NavController, public peopleData:PeopleData, public loadingCtrl:LoadingController) {

    let loader = this.loadingCtrl.create({content:'Loading People'});
    loader.present();

    this.detailPage = DetailPage;
    this.peopleData.getPeople().subscribe(people => {
      console.log('people', people);
      loader.dismiss();
      this.people = people;
    });
  }

  loadDetail(person) {
    this.navCtrl.push(this.detailPage, {person:person});
  }

}
