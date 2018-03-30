import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { ConstantVariable } from '../../app/constant-variable';
import 'rxjs/add/operator/map';

const SERVER_URL: any = {
  getNormal: ConstantVariable.APIURL + 'auth/config/settings',
  getLimit: ConstantVariable.APIURL + 'limit.php',
};
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  configs: any;
  datas: any;

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
    this.configs=null;
  }

  // getConfigData() {
  //   return this.http.get('https://swapi.co/api/films');
  // }

  getConfigData() {
    return new Promise(resolve => {
      this.http.get(SERVER_URL.getNormal)
        // .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.datas = data;
          resolve(this.datas);
        });
    })
  }

  // getNotesDB() {
  //   return new Promise(resolve => {
  //     this.http.get(SERVER_URL.getNormal)
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         // console.log(data);
  //         this.datas = data.dataNotes;
  //         resolve(this.datas);
  //       });
  //   });
  // }

}
