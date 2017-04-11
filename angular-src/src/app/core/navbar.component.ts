import { RestService } from './services/feathers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router,
    private _restService: RestService
  ) { }

  ngOnInit() {
    this._restService.authenticate('e@e.com', 'gamepro1');
  }

}
