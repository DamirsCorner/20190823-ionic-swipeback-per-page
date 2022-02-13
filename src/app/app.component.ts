import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterOutletService } from './router-outlet.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(private routerOutletService: RouterOutletService) {}

  ngAfterViewInit(): void {
    this.routerOutletService.init(this.routerOutlet);
  }
}
