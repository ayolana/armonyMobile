import { SharedModule } from './shared.module';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';  //enableProdMode : make development faster
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MODULES, PROVIDERS, NATIVES  } from './app.imports';
import { IonicStorageModule } from '@ionic/storage';
import { StoreProvider } from '../providers/store/store';
import { FlashProvider } from '../providers/flash/flash';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// this is the magic wand
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS,
    NATIVES,
    StoreProvider,
    FlashProvider,
  ]
})
export class AppModule {}

