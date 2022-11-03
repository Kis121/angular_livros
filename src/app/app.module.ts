import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LivroDetailedComponent } from './component/livro-detailed/livro-detailed.component';
import { HomeComponent } from './component/home/home.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LivroDetailedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
