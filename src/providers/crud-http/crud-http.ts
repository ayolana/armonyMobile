import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ConstantVariable } from '../../app/constant-variable';
import 'rxjs/add/operator/map';

const SERVER_URL:any = {
    getNormal   : ConstantVariable.APIURL+'index.php/tbl_note',
    getLimit    : ConstantVariable.APIURL+'limit.php',
};

@Injectable()
export class CrudHttpProvider {

    limitData:number = 10;
    datas:any = [];

    constructor(public http: Http) {
        console.log('Hello CrudHttpProvider Provider');
        this.datas = null;
    }

    getNotesDB() {
        return new Promise(resolve => {
            this.http.get(SERVER_URL.getNormal)
            .map(res => res.json())
            .subscribe(data => {
                // console.log(data);
                this.datas = data.dataNotes;
                resolve(this.datas);
            });
        });
    }

    getNotesDBLimit(start:number=0) {
        return new Promise(resolve => {
            this.http.get(SERVER_URL.getLimit+'?start='+start+'&limitData='+this.limitData)
            .map(res => res.json())
            .subscribe(data => {
                this.datas = data.dataNotes;
                resolve(this.datas);
            });
        });
    }

    saveNotesDB(datas) {
        let headers  : any      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'}),
            options  : any      = new RequestOptions({ headers: headers });

        if (datas.id) {
            return new Promise(resolve => { 
                this.http.post(SERVER_URL.getNormal+'/'+datas.id, datas, options)
                .map(res => res.json())
                .subscribe((data) => {
                    // console.log(data);
                    resolve(data.dataNotes);
                }, error => {
                    console.log("error "+error);
                });
            });
        }
        else {
            return new Promise(resolve => {
                this.http.post(SERVER_URL.getNormal, datas, options)
                .map(res => res.json())
                .subscribe(data => {
                    // console.log(data);
                    resolve(data.dataNotes[0].id);
                }, error => {
                    console.log("error "+error);
                });
            });
        }
    }
    
    deleteNotesDB(id) {
        this.http.get(SERVER_URL.getNormal+'/'+id)
        .map(res => res.json())
        .subscribe((data) => {
            console.log(data);
        }, error => {
            console.log("error "+error);
        });
    }

}
