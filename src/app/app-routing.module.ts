import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroDetailsComponent } from './components/heroes/hero-details/hero-details.component';
import { HeroCardsComponent } from './components/heroes/hero-cards/hero-cards.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero-details/:id', component: HeroDetailsComponent },
  { path: 'hero-list', component: HeroCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
