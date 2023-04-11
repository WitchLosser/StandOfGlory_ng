import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../hore';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})

export class HeroCardComponent implements OnInit {
  @Input()
  hero?: IHero;
  
  city: string | undefined;
  battalion: string | undefined;
  
  ngOnInit(): void {
    this.city = this.hero?.city?.name;
    this.battalion = this.hero?.battalion?.name;
  }
  
}
