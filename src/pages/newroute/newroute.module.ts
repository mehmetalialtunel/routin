import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { NewroutePage } from './newroute';

@NgModule({
  declarations: [
    NewroutePage,
  ],
  imports: [
    IonicPageModule.forChild(NewroutePage),
    TranslateModule.forChild()
  ],
})
export class NewroutePageModule {}
