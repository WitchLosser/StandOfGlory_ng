import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroDetailsComponent } from './components/heroes/hero-details/hero-details.component';
import { HeroCardsComponent } from './components/heroes/hero-cards/hero-cards.component';
import { AddHeroComponent } from './components/heroes/add-hero/add-hero.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthorizedGuard } from './authorized.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero-details/:id', component: HeroDetailsComponent },
  { path: 'hero-list', component: HeroCardsComponent },
  { path: 'add-hero', component: AddHeroComponent, canActivate: [AuthorizedGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
