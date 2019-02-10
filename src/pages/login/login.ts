import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../pages';
import { MyroutesPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    private auth: AuthService) {

    //this.translateService.use('tr');
  }

  // Attempt to login in through our User service
  doLogin() {
    if (!this.account.password || !this.account.email){
      return;
    }

    let credentials = {
      email: this.account.email,
      password: this.account.password
    }

    this.auth.signInWithUsername(credentials)
      .then( () => this.navCtrl.setRoot(MyroutesPage),
            error => alert('error'));

  }

  openSignup(){
    this.navCtrl.push(SignupPage);
  }

}
