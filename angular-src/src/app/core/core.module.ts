import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { AuthService } from "app/core/services/auth.service";
import { ExtendedHttpService } from './services/extended-http.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthService,
    ExtendedHttpService
  ]
})
export class CoreModule { }
