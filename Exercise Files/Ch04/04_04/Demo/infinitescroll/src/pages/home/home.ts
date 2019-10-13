import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cats = [];

  constructor(public navCtrl: NavController) {
    //create some initial cats
    for(let i=0;i<25;i++) {
      this.cats.push('Cat '+i);
    }
  }

  moreCats(infiniteScroll) {
    //setTimeout trick from docs!
    setTimeout(() => {
      for(let i=0;i<25;i++) {
        this.cats.push('Cat ' + (this.cats.length+1));
      }
      infiniteScroll.complete();
    }, 1000);

  }

}
