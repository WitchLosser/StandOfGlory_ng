import { Component, Input } from '@angular/core';
import { IHeroCard } from '../hore';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})

export class HeroCardComponent {
  @Input()
  hero?: IHeroCard;
}
