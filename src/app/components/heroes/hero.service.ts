import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBattalion, ICity, ICreateHero, IHero } from './hore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'Heroes';
    console.log(this.url);
  }

  getAll(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.url);
  }

  getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(`${this.url}/cities`);
  }
  getBattalions(): Observable<IBattalion[]> {
    return this.http.get<IBattalion[]>(`${this.url}/battalions`);
  }
  getById(id: number): Observable<IHero> {
    return this.http.get<IHero>(`${this.url}/${id}`);
  }
  
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  
  create(hero: FormData): Observable<any> {
    return this.http.post(this.url, hero);
  }

  getHeroByCity(citynName: string): Observable<any> {
    return this.http.get(`${this.url}/${citynName}/GetByCity`);
  }
  getHeroByBattalions(battalionName: string): Observable<any> {
    return this.http.get(`${this.url}/${battalionName}/GetByBattalio`);
  }

  searchByName(name: string): Observable<any> {
    return this.http.get(`${this.url}/${name}/SearchName`);
  }
}
