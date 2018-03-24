import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';

import { PhotoLibrary } from '@ionic-native/photo-library';
// import { CDVPhotoLibraryPipe } from '../../app/pipes/cdvphotolibrary.pipe';

@IonicPage()
@Component({
  selector: 'page-native-photo-library',
  templateUrl: 'native-photo-library.html',
  // providers: [CDVPhotoLibraryPipe]
})
export class NativePhotoLibraryPage {

  showPhoto:any;
  errorMessage:string;

  constructor(
    private photoLibrary: PhotoLibrary, 
    public platform: Platform,
    public alertCtrl: AlertController) {
    if (!this.platform.is('cordova')) {
      console.warn('Cordova is not available');
      const alert = this.alertCtrl.create({
        title: 'Attention!',
        subTitle: 'Only works in real device',
        buttons: ['Close']
      });
      alert.present();
    }
    else{
      this.openPhotoLibrary();
    }
  }

  openPhotoLibrary() {
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          var newLibrary = new Array();
          library.forEach(function(libraryItem) {
            // console.log(libraryItem.id);          // ID of the photo
            // console.log(libraryItem.photoURL);    // Cross-platform access to photo
            // console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            // console.log(libraryItem.fileName);
            // console.log(libraryItem.width);
            // console.log(libraryItem.height);
            // console.log(libraryItem.creationDate);
            // console.log(libraryItem.latitude);
            // console.log(libraryItem.longitude);
            // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
            
            let step1 = libraryItem.photoURL.split('%2F').join('/').split('storage');
            let step2 = "storage"+step1[1];
            let newUrl = "file:///"+step2;
            console.log(newUrl);
            let newData = {
              id: libraryItem.id,
              photoURL: newUrl,
              thumbnailURL: libraryItem.thumbnailURL,
              fileName: libraryItem.fileName,
              width: libraryItem.width,
              height: libraryItem.height,
              creationDate: libraryItem.creationDate,
              latitude: libraryItem.latitude,
              longitude: libraryItem.longitude,
              albumIds: libraryItem.albumIds,
            };
            newLibrary.push(newData);
          });
          this.showPhoto = newLibrary;       
          console.log(this.showPhoto);
        },
        error: err => { this.errorMessage = err; }
      }
      );
    })
    .catch(err => { this.errorMessage = err; console.log('permissions weren\'t granted'); });
  }

}
