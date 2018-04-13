import { Injectable } from '@angular/core';
import { ConstantVariable } from '../../app/constant-variable';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';


const SERVER_URL: any = {
  historyUrl: ConstantVariable.APIURL + 'contributions/history'
  // history: ConstantVariable.APIURL + 'limit.php',
};

/*
  Generated class for the ContributionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContributionProvider {

  public response: any;
  public token: any;
  public tk: any;
  public userToken: string;
  constructor(public http: Http, public storage:Storage) {
    console.log('Hello ContributionProvider Provider');

    this.getTokenDetails().then(val => {
      this.token = val
      this.userToken = val;
    })
  }


getToken() {
    return new Promise((resolve, reject) => {
      this.storage.get("authToken").then((tokenValue) => {
        this.token = tokenValue
        resolve(tokenValue);
      }).catch(error => {
        reject(error);
      })
    });
  }

  getTokenDetails(){
     return this.storage.get('authToken').then(token => { return token })
  }

  history() {
    this.getToken().then(val => {

    console.log('Bearer ' + this.token);
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', this.token);
        headers.append('Authorization', 'Bearer ' + this.token);
        this.http.get(SERVER_URL.historyUrl, { headers: headers })
          .subscribe(res => {
            return res.json();
            this.response = res.json();
          }, (err) => {
            reject(err);
          });
      });


    });
    
  }

}
