import { Injectable } from '@angular/core';
import { Hero } from "../../interfaces/hero"
import { Heroes } from '../../mocks/mock-heroes';
import { Observable, of } from "rxjs"
import { MessageService } from '../messageService/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
    // return Heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = Heroes.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
