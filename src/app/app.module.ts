import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrimeModule } from './components/primeng_modules/prime.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeroCardComponent } from './components/heroes/hero-card/hero-card.component';
import { HeroCardsComponent } from './components/heroes/hero-cards/hero-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    HeroCardsComponent
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
