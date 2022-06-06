import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor() {}

  getPlanets() {
    return PLANETS;
  }

  getPlanet(id: number) {
    return PLANETS.find((planet) => planet.id === id);
  }
}

const PLANETS = [
  {
    id: 1,
    name: 'Earth',
    size: 156,
    location: {
      ss: 1,
      g: 1,
      p: 8,
    },
    resources: {
      iron: 500,
    },
  },
  {
    id: 2,
    name: 'Foo',
    size: 89,
    location: {
      ss: 1,
      g: 1,
      p: 4,
    },
  },
  {
    id: 3,
    name: 'Bar',
    size: 254,
    location: {
      ss: 1,
      g: 2,
      p: 12,
    },
  },
];
