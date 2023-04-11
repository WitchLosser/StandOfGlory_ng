import { Component, OnInit } from '@angular/core';
import { IHero } from '../hore';
import { HEROES } from '../heroes-mock-data'
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit{
  hero?: IHero;

  city: string | undefined;
  battalion: string | undefined;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let id = params['id'];
      //this.hero = HEROES.find(x => x.id == id);

      this.heroService.getById(id).subscribe(res => {
        this.hero = res;
        this.city = this.hero?.city?.name;
        this.battalion = this.hero?.battalion?.name;
      })
    });
  }
}
