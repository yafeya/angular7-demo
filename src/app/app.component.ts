import { Component, OnInit } from '@angular/core';
import { HeroProviderService } from './hero-provider.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  private mHeroes: Array<Hero> = [];

  constructor(private heroProvider: HeroProviderService) { }
  
  get Heroes(): Array<Hero> { 
    return this.mHeroes;
  }

  ngOnInit(): void {
    this.heroProvider.AddHeroes([
      new Hero('1', 'Captain America', 'Super Soldier'),
      new Hero('2', 'Iron Man', 'Armor & Millionare'),
      new Hero('3', 'Thor', 'God with Thunder'),
      new Hero('4', 'Hulk', 'Smash everything'),
      new Hero('5', 'Halk Eye', 'Arrow Sniper'),
      new Hero('6', 'Black Widow', 'Expert of fighting & interrogating')
    ]);
  }

  UpdateHeroList(): void { 
    this.mHeroes = this.heroProvider.GetHeroes();
  }
}
