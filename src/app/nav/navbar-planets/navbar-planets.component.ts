import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/planets/shared/planet.service';

@Component({
  selector: 'app-navbar-planets',
  template: `
    <ul>
      <li><a [routerLink]="['/planets']">All Planets</a></li>
      <li><a [routerLink]="['/planets/new']">Create Planet</a></li>
      <li><a [routerLink]="['user/profile']">Welcome John</a></li>
      <li *ngFor="let planet of planets">
        <a [routerLink]="['/planets', planet.id]">{{ planet.name }}</a>
      </li>
    </ul>
  `,
  styles: [],
})
export class NavbarPlanetsComponent implements OnInit {
  planets: any;
  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.planets = this.planetService.getPlanets();
  }
}
