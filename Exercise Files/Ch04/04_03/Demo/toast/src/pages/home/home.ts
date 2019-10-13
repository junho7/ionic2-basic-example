import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl:ToastController) {
    
    let toast = this.toastCtrl.create({
      message: 'I love Toast!',
      duration: 3000
    });
    window.setTimeout(() => {
      toast.present();
    }, 2000);

  }

}
