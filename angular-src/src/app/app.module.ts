import { routedComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
