import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAuthProvider {

    // currentUser:any;
    currentUser:firebase.User;
    currentUserKey:any;
    
    constructor(public afAuth: AngularFireAuth, public afd:AngularFireDatabase) {
      this.afAuth.authState.subscribe(result => {
        if(result !== null) {
          this.currentUser = result;
          this.getUserDB(result).snapshotChanges().subscribe(result=>{
            console.log("$key : ", result[0].key);
            this.currentUserKey = result[0].key;
            let newObject = Object.assign({}, this.currentUser, result[0]);
            this.currentUser = newObject;
            console.log("new Current User : ", this.currentUser);
          });
        }
      });
    }

    public getUserInfo() {
      return this.currentUser;
    }

    public getUserDB(data) {
      if(data === null) { 
        return this.afd.list('ionium2/user/');
      }
      else{
        console.log("aaa");
        //Angular fire < 5
        // return this.afd.list('ionium2/user/', {
        //   query:{
        //     orderByChild:'email',            
        //     equalTo: data.email,
        //   }
        // });
        //Angular fire >= 5
        return this.afd.list('ionium2/user/', ref =>
          ref.orderByChild('email').equalTo(data.email)
        );
      }
    }

    public saveUserDB(proses, datas) {
      return new Promise(resolve => {
        let sendDatas ={
          photo:datas.photo,
          photoName:datas.photoName
        };
        if (proses == "update") {
          this.afd.list('ionium2/user/').update(this.currentUserKey, sendDatas);
        }
        else {
          this.afd.list('ionium2/user/').push(datas);
        }
        resolve(true);
      });
    }

    doLogin(credentials) {
      return new Promise(resolve => {
        this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(
          result => {
            const dataProses = [true, result];
            resolve(dataProses);
          },
          error => {
            const dataProses = [false, error];
            resolve(dataProses);
          }
        )
        .catch(e => {
          const dataProses = [false, e];
          resolve(dataProses);
        });
      });
    }

    doLogout() {
      return Observable.create(observer => {
        this.afAuth.auth.signOut();
        observer.next(true);
        observer.complete();
      });
    }

    doRegister(credentials) {
      return Observable.create(observer => {
        this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(
          result => {
            console.log("Register Result: ", result);
            //proses input to DB
            let dataUser = {
              name:credentials.name,
              email:credentials.email,
              photo:"",
              uid:result.uid,
              emailVerified:result.emailVerified,
            };
            this.saveUserDB("push", dataUser);
            observer.next(result);
            observer.complete();
          },
          error => {
            observer.next(error);
            observer.complete();
          }
        )
        .catch(e => {
          observer.next(e);
          observer.complete();
        });
      });
    }

}
