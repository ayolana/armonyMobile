import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { createTranslateLoader } from "../../../app/app.imports";
import {Http} from "@angular/http";

import { LanguagePage } from './language';

@NgModule({
  declarations: [
    LanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(LanguagePage),
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [Http]
      }
    }),
  ],
  exports: [
    LanguagePage
  ]
})

export class LanguagePageModule { }
