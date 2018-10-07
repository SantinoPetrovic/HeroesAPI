import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  public add_subject=new Subject<String>()

  constructor(private messageService: MessageService, private http: HttpClient,) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  getMongoHeroes() {
    return this.http.get('/api/getSmashHeroes', {}).map(res => res)
  } 
  getMongoHero(link) {
    return this.http.get('/api/getSmashHeroes/'+link, {}).map(res => res)
  }
  addMongoHeroes(name, link, description) {
    console.log(name);
    return this.http.post('/api/addSmashHero',{
        name: name,
        link: link,
        description: description

    }).map(res => res)    
  }    
}