import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthService {

  private baseUrl: string = 'http://localhost:3030/api/';

  constructor(private _http: Http) { }

  registerUser(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(this.baseUrl + 'signup', user, {headers: headers})
      .map(res => res.json())
      .catch(err => {
        return Observable.throw(err.json());
      });
  }

}
