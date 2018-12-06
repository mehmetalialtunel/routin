import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { MyroutesPage } from '../myroutes/myroutes';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translateService: TranslateService, private auth: AuthService) {
  }

  doSignup() {
    debugger;
    if (!this.account.password || !this.account.email){
      return;
    }

    let credentials = {
      email: this.account.email,
      password: this.account.password
    }

    this.auth.signUp(credentials)
      .then( () => this.navCtrl.setRoot(MyroutesPage),
            error => alert('error'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
