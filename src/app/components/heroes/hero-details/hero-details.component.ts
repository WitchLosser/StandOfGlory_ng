import { Component, OnInit } from '@angular/core';
import { IHeroCard } from '../hore';
import { HEROES } from '../heroes-mock-data'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit{
  hero?: IHeroCard = {id: 1, name: "Test", imagePath: "https://metricool.com/wp-content/uploads/jason-blackeye-364785-2.jpg", battalionId: 1, cityId: 1}

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let id = params['id'];
      this.hero = HEROES.find(x => x.id == id);
    });
  }
}
