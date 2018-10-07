import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  mongoHeroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getMongoHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  getMongoHeroes(): void {
    this.heroService.getMongoHeroes().subscribe(data => {
     // is run sometimes later
     this.mongoHeroes = data
  });
    
  }  
  addMongoHero(name: string, link: string, description: string): void {
//    name = name.trim();
//    if (!name) { return; }
    this.heroService.addMongoHeroes(name, link, description).subscribe(data => {
     // is run sometimes later
     console.log(data);
  });
    console.log(link);
  }  
}