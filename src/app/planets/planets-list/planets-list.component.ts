import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../shared/planet.service';

@Component({
  selector: 'app-planets-list',
  template: `
    <app-planet-thumbnail
      *ngFor="let planet of planets"
      [planet]="planet"
    ></app-planet-thumbnail>
  `,
  styles: [],
})
export class PlanetsListComponent implements OnInit {
  planets: any;

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.planets = this.planetService.getPlanets();
  }
}
