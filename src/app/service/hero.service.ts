import { Observable } from 'rxjs';
import { Hero } from './../model/hero';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  jsonUrl: string = "http://localhost:3000/heroes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.jsonUrl);
  }

  getOne(id: string | number): Observable<Hero> {
    return this.http.get<Hero>(`${this.jsonUrl}/${id}`);
  }

  add(hero: Hero): Observable<any> {
    return this.http.post<Observable<any>>(this.jsonUrl, hero);
  }

  remove(hero: any): Observable<any> {
    hero = hero.id ? hero.id : hero;
    return this.http.delete(`${this.jsonUrl}/${hero}`);
  }

  update(hero: any): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${hero.id}`, hero);
  }

}
