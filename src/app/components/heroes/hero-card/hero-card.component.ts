import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../hore';
import { environment } from 'src/environments/environment';
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
  imgPath: string | undefined;
  ngOnInit(): void {
    this.city = this.hero?.city?.name;
    this.battalion = this.hero?.battalion?.name;
    this.imgPath = environment.imgUrl + this.hero?.imagePath;

    console.log(this.hero);
  }
  
}
