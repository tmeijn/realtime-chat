import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { AuthService } from "app/core/services/auth.service";

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
    AuthService
  ]
})
export class CoreModule { }
