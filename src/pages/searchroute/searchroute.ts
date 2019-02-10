import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RouteService } from '../../services/route.service';
import { Route } from '../../model/route.model';
import { Observable } from 'rxjs';

/**
 * Generated class for the SearchroutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchroute',
  templateUrl: 'searchroute.html',
})
export class SearchroutePage {

  routes: Observable<Route[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private routeService: RouteService) {

      // this.routes = routeService.routes.get().pipe().map(changes => 
      //        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      //      );

  }

  getItems(ev) {
    debugger;
    this.routes = this.routeService.searchRoute(ev.target.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchroutePage');
  }

}
