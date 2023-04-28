import { Component, OnInit } from '@angular/core';
import { IBattalion, ICity, IHero } from '../hore';
import { HEROES } from '../heroes-mock-data';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss'],
})
export class HeroCardsComponent implements OnInit {
  heroes: IHero[] = [];
  cities: ICity[] = [];
  battalions: IBattalion[] = [];
  selectedBattalion?: IBattalion;
  selectedCity?: ICity;
  searchValue: string = "";


  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getAll().subscribe(res => {
      this.heroes = res;
    });

    this.heroService
     .getCities()
      .subscribe(res => {this.cities = res});
    this.heroService
      .getBattalions()
      .subscribe(res => {this.battalions = res});
    };
    getListbyCity() {
      if (this.selectedCity) {
        this.heroService
          .getHeroByCity(this.selectedCity.name)
          .subscribe(res => {this.heroes = res});
        console.log(this.selectedCity);
        console.log(this.heroes);
      }
    };
  getListbyBattalion() {
    if (this.selectedBattalion) {
      this.heroService
        .getHeroByBattalions(this.selectedBattalion.name)
        .subscribe(res => {this.heroes = res});
    }
  };
  getAllHeroes(){
    this.heroService.getAll().subscribe(res => {
      this.heroes = res;
    });
  }
  searchByName() {
    this.heroService.searchByName(this.searchValue).subscribe(res => {
      this.heroes = res;
    });
  }
}
