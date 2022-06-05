import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets-list',
  template: `
    <h2>planets-list</h2>
    <hr />
    <app-planet-thumbnail *ngFor="let planet of planets" 
      [planet]="planet"></app-planet-thumbnail>
  `,
  styles: [],
})
export class PlanetsListComponent implements OnInit {
  planets = [
    {
      id: 1,
      name: 'Earth',
      size: 156,
      location: {
        ss: 1,
        g: 1,
        p: 8,
      },
      resources:{
        iron: 500
      }
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

  constructor() {}

  ngOnInit(): void {}
}
