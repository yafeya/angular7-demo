import { Component, OnInit } from '@angular/core';
import { HeroProviderService } from '../hero-provider.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroProvider: HeroProviderService) { }
  
  get IsValid(): boolean { 
    return this.heroProvider.SelectedHero !== undefined;
  }

  get SelectedHero(): Hero{
    return this.heroProvider.SelectedHero;
  }

  ngOnInit() { }

}
