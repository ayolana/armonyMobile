import { Component } from '@angular/core';
import { Events, LoadingController, AlertController, Platform, IonicPage, NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { FirebaseAuthProvider } from '../../../providers/firebase/firebase-auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

declare var window: any;

@IonicPage()
@Component({
  selector: 'page-firebase-upload-file',
  templateUrl: 'firebase-upload-file.html',
})
export class FirebaseUploadFilePage {

  successMessage: string; 
  errorMessage: string;
  loading: any;
  public imageRef: any;
  public selectedImage: any;
  public selectedImage2: any;
  public uploadedImage: any;
  public loginStatus:boolean;
  userData:any;

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public events: Events,
    public camera:Camera, 
    public platform: Platform,
    public afAuth: AngularFireAuth,
    public fbAuth: FirebaseAuthProvider,
    public alertCtrl: AlertController
  ) {
    this.afAuth.authState.subscribe(
      result => {
        if(result !== null) {
          this.loginStatus = true;
        }
        else{
          this.loginStatus = false;          
        }
      }
    );
    this.imageRef = firebase.storage().ref('ionium2/files/');
    this.userData = this.fbAuth.getUserInfo();
  }

  makeFileIntoBlob(imagePath) {
    
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(imagePath, (fileEntry) => {
  
        fileEntry.file((resFile) => {
          console.log("resFile : ", resFile);
          console.log("fileEntry : ", fileEntry);
          console.log("imagePath : "+imagePath);
          
          var reader = new FileReader();
          reader.onloadend = (evt: any) => {
            var imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            imgBlob.name = 'sample.jpg';
            resolve(imgBlob);
          };
  
          reader.onerror = (e) => {
            console.log('Failed file read: ' + e.toString());
            reject(e);
          };
  
          reader.readAsArrayBuffer(resFile);
        });
      });
    });
  }

  // Return a promise to catch errors while loading image
  getMedia(): Promise<any> {
    return new Promise(resolve =>
    {
      this.showLoading();
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        // mediaType: this.camera.MediaType.PICTURE,
        mediaType: this.camera.MediaType.ALLMEDIA,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        quality: 80,
        correctOrientation : true
      })
      .then((imagePath)=>{
          if (this.platform.is('android')) {
              // Modify fileUri format, may not always be necessary
              imagePath = 'file://' + imagePath;
          }
          
          console.log("imagePath : ", imagePath);          
          // convert picture to blob
          return this.makeFileIntoBlob(imagePath);
        }, (err) => {
          console.log(err);
          this.errorMessage = err;
          const alert = this.alertCtrl.create({
              title: 'Attention!',
              subTitle: 'Only works on real device',
              buttons: ['Close']
          });
          alert.present();
          return false;
        }
      )
      .then(imageBlob =>{
        console.log("imageBlob : ", imageBlob);
        if(imageBlob) return this.uploadToFirebase(imageBlob);
        return false;
      })
      .then((uploadSnapshot: any) => {
        console.log("uploadSnapshot : ", uploadSnapshot);
        if(uploadSnapshot) {
          this.uploadedImage = uploadSnapshot.photo;
          this.events.publish('photo:selected', uploadSnapshot.photo);
          return this.saveToDB(uploadSnapshot);
        }
        else{
          return false;          
        } 
      })
      .then((uploadSnapshot: any) => {
        this.loading.dismiss();
        if(uploadSnapshot === false)  console.log("Ups!! Something wrong");
        else console.log("Success All");        
      })
      .catch(error => {
        console.log(error);
        this.loading.dismiss();
        return false;
      });
    });
  }

  uploadToFirebase(fileUri)  {
    // Create a timestamp as filename
    let filename       : string  = new Date().getTime() + '.jpg';
    console.log("filename: ", filename);

    if(this.userData.photo !== ""){
      let desertRef = firebase.storage().ref().child('ionium2/files/'+this.userData.photoName);
      // Delete Old file
      desertRef.delete().then(function() {
          // Old File deleted successfully
      }).catch(function(error) {
          // Uh-oh, an error occurred!
      });
    }

    return new Promise((resolve, reject) => {
      // Upload file
      let doUpload   = firebase.storage().ref('ionium2/files/'+filename).put(fileUri);
      console.log("doUpload: ", doUpload);
      doUpload.on('state_changed',
          (snapshot) =>{
            console.log('snapshot progess ' + snapshot);
              //make progress
              // We could log the progress here IF necessary
              // console.log('snapshot progess ' + snapshot);
          },
          (error) => { 
            reject(error); },
          () =>
          {   //if complete
            let imageData ={
              photo:doUpload.snapshot.downloadURL,
              photoName:filename
            };
            resolve(imageData);
          }
      );
    });
  }

  saveToDB(imageData){
    return new Promise((resolve, reject) => {
      console.log("imageData: ", imageData);

      this.fbAuth.saveUserDB("update", imageData)
      .then(status=>{
        if(status) resolve();
        else reject();
      });
    });
  }

  itemTapped(event, destination) {
    this.navCtrl.push(destination);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

}