import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContributionsListPage } from './contributions';

@NgModule({
  declarations: [
    ContributionsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContributionsListPage),
  ],
})
export class ContributionsPageModule {}
