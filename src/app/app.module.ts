import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrimeModule } from './components/primeng_modules/prime.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeroCardComponent } from './components/heroes/hero-card/hero-card.component';
import { HeroCardsComponent } from './components/heroes/hero-cards/hero-cards.component';
import { HeroDetailsComponent } from './components/heroes/hero-details/hero-details.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddHeroComponent } from './components/heroes/add-hero/add-hero.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    HeroCardsComponent,
    HeroDetailsComponent,
    HomeComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
