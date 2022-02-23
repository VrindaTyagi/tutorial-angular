import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Iron Man', quirk: 'Super suit with Jarvis' },
      {
        id: 2,
        name: 'Spider Man',
        quirk: 'Superhuman strength and controlling spider webs',
      },
      { id: 3, name: 'Wolverine', quirk: 'Immortality and adamantium  claws' },
      {
        id: 4,
        name: 'Green Lantern',
        quirk:
          'Has the ability to conjure solid green constructs and control them telekinetically',
      },
      {
        id: 5,
        name: 'Doctor Strange',
        quirk: 'Can control time and multiple universes',
      },
      { id: 6, name: 'Professor X', quirk: 'Can read and control the mind' },
      { id: 7, name: 'Ant Man', quirk: 'Can control ants and can shapeshift' },
      {
        id: 8,
        name: 'Superman',
        quirk: 'Superhuman strength with flying and laser eyes',
      },
      { id: 9, name: 'Thor', quirk: 'Superhuman strength with thunder hammer' },
      {
        id: 10,
        name: 'Deadpool',
        quirk: 'Immortality and superhuman strength',
      },
    ];

    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
