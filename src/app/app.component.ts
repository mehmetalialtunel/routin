import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { Settings } from '../providers/providers';
import { AuthService } from '../services/auth.service';
import { MyroutesPage } from '../pages/myroutes/myroutes';
import { AngularFirestore } from "angularfire2/firestore";
import { MenuController } from 'ionic-angular';

@Component({
  template: `<ion-menu [content]="content" side="right" id="slidingMenu">

  <ion-header>
    <ion-toolbar>
      <ion-title>Ayarlar</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <button ion-item (click)="logOut()">
        Çıkış yap
      </button>
    </ion-list>
  </ion-content>

</ion-menu>
<ion-nav #content [root]="rootPage" ></ion-nav>`
})
export class MyApp {
  rootPage: any;

  @ViewChild(Nav) nav: Nav;

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen,
    private auth: AuthService, private fireStore: AngularFirestore, private menu: MenuController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();

    this.auth.afAuth.authState.subscribe(
					user => {
						if (user) {
              this.rootPage = MyroutesPage;
              this.menu.enable(true, 'slidingMenu')
						} else {
              this.rootPage = 'LoginPage';
              this.menu.enable(false, 'slidingMenu');
						}
					},
					() => {
            this.rootPage = 'LoginPage';
					}
				);

  }

  logOut(){
    this.auth.logOut();
    this.menu.close('slidingMenu');
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('tr');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('tr'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }
}
