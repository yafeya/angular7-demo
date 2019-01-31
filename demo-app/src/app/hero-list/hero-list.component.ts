import { Component, OnInit } from '@angular/core';
import { HeroProviderService } from '../hero-provider.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  private mHeroes: Array<Hero> = [];

  constructor(private heroProvider: HeroProviderService) { }

  get Heroes(): Array<Hero> { 
    return this.mHeroes;
  }

  ngOnInit() {
  }

  UpdateHeroList(): void { 
    this.mHeroes = this.heroProvider.GetHeroes();
  }

  OnSelectedHero(hero: Hero) {
    this.heroProvider.SelectedHero = hero;
  }

}
