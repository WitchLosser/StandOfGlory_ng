import { Component, OnInit } from '@angular/core';
import { IHero } from '../hore';
import { HEROES } from '../heroes-mock-data';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss']
})
export class HeroCardsComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getAll().subscribe(res => {
      this.heroes = res;
    })
  }

}
