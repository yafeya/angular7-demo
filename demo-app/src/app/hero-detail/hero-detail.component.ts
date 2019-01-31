import { Component, OnInit } from '@angular/core';
import { HeroProviderService } from '../hero-provider.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  IsEditing: boolean = false;
  StatusTitle: string = 'Edit Hero';
  HeroName: string = '';
  HeroPower: string = '';

  constructor(private heroProvider: HeroProviderService) { }
  
  get IsValid(): boolean { 
    return this.heroProvider.SelectedHero !== undefined;
  }

  get SelectedHero(): Hero{
    return this.heroProvider.SelectedHero;
  }

  Edit() { 
    this.IsEditing = !this.IsEditing;
    if (this.IsEditing) {
      this.StatusTitle = 'Cancel';
      this.HeroName = this.heroProvider.SelectedHero ? this.heroProvider.SelectedHero.Name : '';
      this.HeroPower = this.heroProvider.SelectedHero ? this.heroProvider.SelectedHero.Power : '';
    }
    else {
      this.StatusTitle = 'Edit Hero';
    }
  }

  Submit() { 
    this.heroProvider.SelectedHero.Name = this.HeroName;
    this.heroProvider.SelectedHero.Power = this.HeroPower;
    this.IsEditing = false;
  }

  ngOnInit() { }

}
