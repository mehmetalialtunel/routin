import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { RouteService } from '../../services/route.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

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

  myRoutes: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translateService: TranslateService, public routeService: RouteService, private auth: AuthService) {

      this.myRoutes = this.routeService.listMyRoutes("EJXSsbU6SwWjuDt2tyUovvUMkd42");
      //this.myRoutes.subscribe(x => console.log(x));
      //translateService.use('tr');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyroutesPage');
  }

  openRouteDetail(item){
    alert(item + " detayları");
  }

  newRoute(){
    this.navCtrl.push("NewroutePage");
  }

  searchRoute(){
    this.navCtrl.push("SearchroutePage");
  }

}
