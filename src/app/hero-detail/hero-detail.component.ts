import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMongoHero();
  }

  getMongoHero(): void {
    const link = this.route.snapshot.paramMap.get('link');
    this.heroService.getMongoHero(link).subscribe(data => {
     // is run sometimes later
     this.smashHero = data.data
    });
  }

  goBack(): void {
    this.location.back();
  }
}