import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroProviderService {

  private mHeroes: Array<Hero> = [];

  constructor() { }

  GetHeroes(): Array<Hero>{
    return this.mHeroes;
  }

  AddHeroes(heroes: Array<Hero>) {
    let identities = this.mHeroes.map((v, i, a) => v.Id);
    for (let hero of heroes) {
      if (!identities.includes(hero.Id)) {
        this.mHeroes.push(hero); 
      }
    }
  }

  GetHero(id: string): Hero { 
    let result: Hero = undefined;
    for (let hero of this.mHeroes) {
      if (hero.Id === id) {
        result = hero;
        break;
      }
    }
    return result;
  }

}
