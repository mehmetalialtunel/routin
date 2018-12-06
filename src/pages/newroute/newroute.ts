import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { RouteService } from '../../services/route.service';
import { Route } from '../../model/route.model';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the NewroutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google;

@IonicPage()
@Component({
  selector: 'page-newroute',
  templateUrl: 'newroute.html',
})
export class NewroutePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService,
        private routeService: RouteService, private auth: AuthService) {

  }

  route: Route = {
    name: "",
    start: "08:00",
    stop: "18:00",
    owner: ""
  };

  addRoute(route: Route) {
    this.route.owner = this.auth.getCurrent().uid;
    this.routeService.addRoute(route).then(ref => {
      console.log(ref);
    })
  }

}
