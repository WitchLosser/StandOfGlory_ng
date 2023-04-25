import { Component, OnInit } from '@angular/core';
import { IHero } from '../hore';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  hero?: IHero;

  city: string | undefined;
  battalion: string | undefined;
  imgPath: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.heroService.getById(id).subscribe((res) => {
        this.hero = res;
        this.city = this.hero?.city?.name;
        this.battalion = this.hero?.battalion?.name;
        this.imgPath = environment.imgUrl + this.hero?.imagePath;
      });
    });
  }
  delete(): void {
    let id = this.hero?.id;
    if (id) {
      this.heroService.delete(id).subscribe((res) => {
        console.log('Hero was deleted successfuly!');
      });
    }
  }
}
