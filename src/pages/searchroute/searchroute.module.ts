import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SearchroutePage } from './searchroute';

@NgModule({
  declarations: [
    SearchroutePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchroutePage),
    TranslateModule.forChild()
  ],
})
export class SearchroutePageModule {}
