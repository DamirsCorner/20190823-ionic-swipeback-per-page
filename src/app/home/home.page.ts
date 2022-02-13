import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterOutletService } from '../router-outlet.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private routerOutletService: RouterOutletService,
    private navCtrl: NavController
  ) {}

  ionViewDidEnter() {
    this.routerOutletService.swipebackEnabled = false;
  }

  ionViewDidLeave() {
    this.routerOutletService.swipebackEnabled = true;
  }

  goToNext() {
    return this.navCtrl.navigateForward('/next');
  }

  goToSub() {
    return this.navCtrl.navigateForward('/sub');
  }
}
