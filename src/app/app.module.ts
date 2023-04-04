import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrimeModule } from './components/primeng_modules/prime.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
