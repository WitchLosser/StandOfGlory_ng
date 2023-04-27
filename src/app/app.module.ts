import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrimeModule } from './components/primeng_modules/prime.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeroCardComponent } from './components/heroes/hero-card/hero-card.component';
import { HeroCardsComponent } from './components/heroes/hero-cards/hero-cards.component';
import { HeroDetailsComponent } from './components/heroes/hero-details/hero-details.component';
import { HomeComponent } from './components/home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AddHeroComponent } from './components/heroes/add-hero/add-hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/account/login/login.component';
import { JwtInterceptor } from './components/account/jwt.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/account/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    HeroCardsComponent,
    HeroDetailsComponent,
    HomeComponent,
    AddHeroComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PrimeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
