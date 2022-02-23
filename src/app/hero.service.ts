import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

//@Injectable - this marks the class as one that participates in the dependency injection system
@Injectable({
  providedIn: 'root',
})
//When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it turns out not to be used after all.
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  //synchronous way
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //asynchronous way without httpclient
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }

  private heroesUrl = 'api/heroes'; // URL to web api

  //asynchronous way with httpclient
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  //In general, an observable can return multiple values over time. An observable from HttpClient always emits a single value and then completes, never to emit again.
}
