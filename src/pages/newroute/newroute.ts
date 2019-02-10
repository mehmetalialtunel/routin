import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

@IonicPage()
@Component({
  selector: 'page-newroute',
  templateUrl: 'newroute.html',
})
export class NewroutePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService,
        private routeService: RouteService, private auth: AuthService) {

    if (navParams.data != undefined){
      this.route = navParams.data;
    }
    
  }

  route: Route = {
    name: "",
    start: "08:00",
    stop: "18:00",
    owner: ""
  };

  addRoute(route: Route) {
    this.routeService.saveRoute(route);
    this.navCtrl.pop();
  }

}
