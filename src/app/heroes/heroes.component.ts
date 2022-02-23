import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  //When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  constructor(private heroService: HeroService) {}

  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
    this.getHeroes();
  }

  hero: Hero = {
    id: 1,
    name: 'Doctor Strange',
    quirk: 'Can control time and multiple universes',
  };

  //synchronous way
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //asynchronous way
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }
}
