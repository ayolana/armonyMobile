import { SharedModule } from './shared.module';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';  //enableProdMode : make development faster
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MODULES, PROVIDERS, NATIVES  } from './app.imports';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage';

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
    AuthProvider,
  ]
})
export class AppModule {}

