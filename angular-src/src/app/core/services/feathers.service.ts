import { environment } from '../../../environments/environment.prod';
import * as feathers from 'feathers-client';
import * as socketio from 'feathers-socketio/client';
import * as io from 'socket.io-client';
import * as localstorage from 'feathers-localstorage';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest/client';
import * as authentication from 'feathers-authentication-client';

import { Injectable } from '@angular/core';
import superagent from 'superagent';

const HOST = environment.apiBaseUrl ; // Your base server URL here
@Injectable()
export class RestService {
  public socket: io.socket;
  private _app: any;
  constructor() {
    this.socket = io(HOST);

    this._app = feathers() // Initialize feathers
      .configure(rest(HOST).superagent(superagent)) // Fire up rest
      .configure(hooks()) // Configure feathers-hooks
      .configure(authentication({
        storage: window.localStorage // Set storage of token
      }));
  }

  public authenticate(email, password): Promise<boolean> {
    let isAuthenticated: boolean = false;

    return this._app.authenticate({
      strategy: 'local',
      email: email,
      password : password
    }).then(response => {
      console.log('Authenticated!', response);
      isAuthenticated = true;
      return this._app.passport.verifyJWT(response.accessToken);
    })
    .then(payload => {
      console.log('JWT Payload', payload);
      return this._app.service('users').get(payload.userId);
    })
    .then(user => {
      this._app.set('user', user);
      console.log('User', this._app.get('user'));
      return isAuthenticated = true;
    })
    .catch(function(error){
      console.error('Error authenticating!', error);
    });
  }

  public getService(service) {
    return this._app.service(service);
  }
}

@Injectable()
export class SocketService {
  public socket: io.socket;
  private _app: any;

  constructor() {
    this.socket = io(HOST);
    this._app = feathers()
      .configure(socketio(this.socket))
      .configure(hooks())
      // .configure(authentication({
      //   storage: window.localStorage
      // }));

    // this._app.authenticate({
    //   strategy: 'local',
    //   email: 'tyrone_meijn@hotmail',
    //   password : 'test1'
    // }).then(result => console.log(result)).catch(err => console.error('Error authenticating!', err));
  }

  getService(service) {
    return this._app.service(service);
  }
}
