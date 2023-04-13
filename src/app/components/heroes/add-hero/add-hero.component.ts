import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { IBattalion, ICity, ICreateHero } from '../hore';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  heroForm: FormGroup;

  constructor(private fb: FormBuilder, private heroService: HeroService) {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      birthDate: [new Date().getDate()],
      dateOfDeath: [new Date().getDate()],
      story: [''],
      cityId: [],
      battalionId: [],
      cardNumber: [''],
      imagePath: ['']
    });
  }

  cities: ICity[] = [];
  battalions: IBattalion[] = [];

  ngOnInit(): void {
    this.heroService.getCities().subscribe(res => this.cities = res);
    console.log(this.cities);
    
    this.heroService.getBattalions().subscribe(res => this.battalions = res);
  }

  showResult() {
    let item: ICreateHero = this.heroForm.value as ICreateHero;
    item.battalionId = 2;
    item.cityId = 1;
    console.log(item);

    // let data = new FormData();
    // data.append()

    // send to the server
    this.heroService.create(item).subscribe(res => {
      console.log("Movie was created successfuly!");
    });
  }

}
