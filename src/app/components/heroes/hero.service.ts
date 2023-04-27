import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBattalion, ICity, ICreateHero, IHero } from './hore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private url: string;

  constructor(private http: HttpClient) 
  {
    this.url = environment.apiUrl + 'Heroes';
    console.log(this.url);
    
  }

  getAll(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.url);
  }

  getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(`${this.url}/battalions`);
  }
  getbyCity(citynName: string): Observable<IHero[]> {
    return this.http.get<IHero[]>(`${this.url}/${citynName}/GetByCity`);
  }
  getBattalions(): Observable<IBattalion[]> {
    return this.http.get<IBattalion[]>(`${this.url}/cities`);
  }
  getbyBattalions(battalionName: string): Observable<IHero[]> {
    return this.http.get<IHero[]>(`${this.url}/${battalionName}/GetByBattalio`);
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
}
