import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContributionsHistoryPage } from './contributions-history';

@NgModule({
  declarations: [
    ContributionsHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ContributionsHistoryPage),
  ],
})
export class ContributionsHistoryPageModule {
  pet: string ='puppies';
}
