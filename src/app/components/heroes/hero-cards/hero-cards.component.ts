import { Component, OnInit } from '@angular/core';
import { IBattalion, ICity, IHero } from '../hore';
import { HEROES } from '../heroes-mock-data';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss']
})
export class HeroCardsComponent implements OnInit {
  heroes: IHero[] = [];
  cities: ICity[] = [];
  battalions: IBattalion[] = [];
  selectedBattalion?: IBattalion;
  selectedCity?: ICity;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getAll().subscribe(res => {
      this.heroes = res;
    })
    
    this.heroService.getCities().subscribe(res => this.cities = res);
    this.heroService.getBattalions().subscribe(res => this.battalions = res);
  }
  getListbyBattalion(): void{
    console.log(this.selectedBattalion);
    console.log(this.cities);
    if (this.selectedBattalion) {
      
      this.heroService.getbyBattalions(this.selectedBattalion?.name).subscribe(res => this.heroes = res);
    }
  }
  getListbyCity(): void{
    
    if (this.selectedCity) {
      this.heroService.getbyCity(this.selectedCity?.name).subscribe(res => this.heroes = res);
    }
  }
}
