import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IHero } from './hore';
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
  // getGenres(): Observable<IGenre[]> {
  //   return this.http.get<IGenre[]>(`${this.url}/genres`);
  // }

  getById(id: number): Observable<IHero> {
    return this.http.get<IHero>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  // create(movie: ICreateMovieDto): Observable<any> {
  //   return this.http.post(`${this.url}`, movie);
  // }
}
