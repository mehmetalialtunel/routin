import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MyroutesPage } from './myroutes';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyroutesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyroutesPage),
    TranslateModule.forChild(),
    AngularFireDatabaseModule
  ],
})
export class MyroutesPageModule {}
