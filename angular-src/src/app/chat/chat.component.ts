import { RestService } from '../core/services/feathers.service';
import { MessageService } from './message.service';
import { Component } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [MessageService]
})
export class ChatComponent {
  title = 'app works!';
  messages: any[] = [];
  private subscription: Subscription;
  newMessage: string;

  constructor (
    private _messageService: MessageService,
    private _restService: RestService
  ) {}

  ngOnInit() {
    this.subscription = this._messageService.messages$.subscribe((messages: any) => {
      this.messages.push(messages);
    }, err => {console.error(err)});

    //this.retreive();
    
    }

  retreive(): void {
    this._messageService.find({query: { $limit: 24, $sort: { createdAt: -1 }  }}).then(messages => {
    this.messages = messages.data;
    console.log(messages);
    });
  }

  sendMessage(): void {
    this._messageService.create({
      text: this.newMessage
    })
  }


}

