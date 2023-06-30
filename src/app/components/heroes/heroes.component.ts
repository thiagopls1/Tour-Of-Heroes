import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero'
import { HeroService } from 'src/app/services/heroService/hero.service';
import { MessageService } from 'src/app/services/messageService/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];
  selectedHero?: Hero;
  
  constructor(private heroService: HeroService, private messageService: MessageService){}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
