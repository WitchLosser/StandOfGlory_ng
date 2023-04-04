import { Component } from '@angular/core';
import { IHeroCard } from '../hore';
import { HEROES } from '../heroes-mock-data';

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss']
})
export class HeroCardsComponent {
  heroes: IHeroCard[] = HEROES;
}
