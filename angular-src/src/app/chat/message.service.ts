import { RestService, SocketService } from '../core/services/feathers.service';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Injectable()
export class MessageService {
  private _socket;
  private _rest;

  public messages$: Observable<any>;
  private messagesObserver: Observer<any>;
  private dataStore: {
    messages: Array<any>
  }

  constructor(
    private _socketService: SocketService,
    private _restService: RestService
  ) {
    // Let's get both the socket.io and REST feathers services for messages!
    this._rest = _restService.getService('api/messages');
    this._socket = _socketService.getService('api/messages');

    this._socket.on('created', (message) => this.onCreated(message));
    this._socket.on('updated', (message) => this.onUpdated(message));
    this._socket.on('removed', (message) => this.onRemoved(message));

    this.messages$ = new Observable(observer => this.messagesObserver = observer);

    this.dataStore = { messages: [] };
  }

  find(query?: any) {
    return this._rest.find(query);
  }

  get(id: string, query: any) {
    return this._rest.get(id, query);
  }

  create(message: any) {
    return this._rest.create(message);
  }

  remove(id: string, query: any) {
    return this._socket.remove(id, query);
  }

  private getIndex(id: string): number {
    let foundIndex = -1;

    for (let i = 0; i < this.dataStore.messages.length; i++) {
      if (this.dataStore.messages[i].id === id) {
        foundIndex = i;
      }
    }

    return foundIndex;
  }

  private onCreated(message) {
    console.log('New message:', message);
    this.dataStore.messages.push(message);

    this.messagesObserver.next(message);
  }

  private onUpdated(message) {
    const index = this.getIndex(message.id);

    this.dataStore.messages[index] = message;

    this.messagesObserver.next(this.dataStore.messages);
  }

  private onRemoved(message) {
    const index = this.getIndex(message.id);

    this.dataStore.messages.splice(index, 1);

    this.messagesObserver.next(this.dataStore.messages);
  }

}