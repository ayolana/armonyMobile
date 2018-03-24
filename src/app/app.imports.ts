//Used for setting
import { ConstantVariable } from './constant-variable';

//used for Firebase
const firebaseConfig = {
    apiKey              : ConstantVariable.apiKey,
    authDomain          : ConstantVariable.authDomain,
    databaseURL         : ConstantVariable.databaseURL,
    projectId           : ConstantVariable.projectId,
    storageBucket       : ConstantVariable.storageBucket,
    messagingSenderId   : ConstantVariable.messagingSenderId
  };

//Used for Theming
import { AppState } from './global.setting';

//MODULE
import { Http, HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { SwingModule } from 'angular2-swing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//PROVIDER
import { FirebaseDatabaseProvider } from './../providers/firebase/firebase-database';
import { FirebaseAuthProvider } from './../providers/firebase/firebase-auth';
import { CrudHttpProvider } from '../providers/crud-http/crud-http';
import { CrudStorageProvider } from '../providers/crud-storage/crud-storage';
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';

//NATIVE
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ActionSheet } from '@ionic-native/action-sheet';
// import { NativeAppRatePage } from '../pages/native-app-rate/native-app-rate';
import { AppRate } from '@ionic-native/app-rate';
import { Camera } from '@ionic-native/camera';
import { CallNumber  } from '@ionic-native/call-number';
import { Crop } from '@ionic-native/crop';
import { DatePicker } from '@ionic-native/date-picker';
import { EmailComposer } from '@ionic-native/email-composer';
import { Geolocation } from '@ionic-native/geolocation';
import { Instagram } from '@ionic-native/instagram';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Push } from '@ionic-native/push';

//DIRECTIVES
import { Autosize } from '../components/autosize/autosize';

//COMPONENTS
import { Timer } from '../components/countdown-timer/timer';
import { TimerProgress } from '../components/timer-progress/timer-progress';
import { ExpandableHeader } from '../components/expandable-header/expandable-header';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { TimelineTimeComponent, TimelineComponent, TimelineItemComponent } from '../components/timeline/timeline';

//PIPES
import { CapitalizePipe } from '../pipes/capitalize.pipe';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const firebaseConfigEx = firebaseConfig;

export const MODULES = [
    SwingModule,
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
];

export const PROVIDERS = [
    AlertService,
    ToastService,
    CrudHttpProvider,
    FirebaseDatabaseProvider,
    FirebaseAuthProvider,
    CrudStorageProvider,
    AppState,
];

export const NATIVES = [
    SplashScreen,
    StatusBar,
    ActionSheet,
    AppRate,
    Camera,
    CallNumber,
    Crop,
    DatePicker,
    EmailComposer,
    Geolocation,
    Instagram,
    LaunchNavigator,
    PhotoLibrary,
    SMS,
    SocialSharing,
    YoutubeVideoPlayer,
    Push,
];

export const COMPONENTS = [
    Timer,
    TimerProgress,
    Timer,
    ExpandableHeader,
    FlashCardComponent,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
];

export const DIRECTIVES = [
    Autosize,
];

export const PIPES = [
    CapitalizePipe,
];
