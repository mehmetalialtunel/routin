import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RouteService } from '../../services/route.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Route } from '../../model/route.model';

/**
 * Generated class for the MyroutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myroutes',
  templateUrl: 'myroutes.html',
})
export class MyroutesPage {

  myRoutes: Observable<Route[]>;

  currentUser: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public routeService: RouteService, private auth: AuthService) {

      this.myRoutes = routeService.routes.snapshotChanges().map(actions => {
        return actions.map(item => {
          return { id: item.payload.doc.id, ...item.payload.doc.data() }
        });
      });

  }

  openRouteDetail(item){
    this.navCtrl.push("NewroutePage", item);
  }

  newRoute(){
    this.navCtrl.push("NewroutePage");
  }

  searchRoute(){
    this.navCtrl.push("SearchroutePage");
  }

}
