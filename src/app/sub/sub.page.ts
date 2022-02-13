import { Component } from '@angular/core';
import { RouterOutletService } from '../router-outlet.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.page.html',
  styleUrls: ['./sub.page.scss'],
})
export class SubPage {
  constructor(private routerOutletService: RouterOutletService) {}

  ionViewDidEnter() {
    this.routerOutletService.swipebackEnabled = false;
  }

  ionViewDidLeave() {
    this.routerOutletService.swipebackEnabled = true;
  }
}
