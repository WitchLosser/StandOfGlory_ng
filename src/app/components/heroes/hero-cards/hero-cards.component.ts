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
  searchValue: string = "";

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getAll().subscribe(res => {
      this.heroes = res;
    })
  }

  searchByName() {
    this.heroService.searchByName(this.searchValue).subscribe(res => {
      this.heroes = res;
    });
  }
  
}
