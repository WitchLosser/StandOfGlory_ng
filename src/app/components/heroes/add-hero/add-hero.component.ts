import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { IBattalion, ICity, ICreateHero } from '../hore';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  heroForm: FormGroup;
  unauthorized = false;


  constructor(private fb: FormBuilder, private heroService: HeroService) {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      birthDate: [new Date(Date.now())],
      dateOfDeath: [new Date(Date.now())],
      story: [''],
      cityId: [],
      battalionId: [],
      cardNumber: [''],
      image: []
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
     
     const formData = new FormData();
     for (const key of Object.keys(this.heroForm.value)) {
       const value = this.heroForm.value[key];
       formData.append(key, value);
      }
    
    formData.set('birthDate', item.birthDate.toISOString());
    formData.set('dateOfDeath', item.dateOfDeath.toISOString());
    // send to the server
    this.heroService.create(formData).subscribe(res => {
      console.log("Hero was created successfuly!")
    }
    , err => {
      if (err.status == 401) {

        this.unauthorized = true;
      }
    });
  }

  onFileChanged(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.heroForm.patchValue({
        image: file,
      });
    }
  }
   
}
