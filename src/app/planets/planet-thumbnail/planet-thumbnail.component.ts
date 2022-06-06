import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-thumbnail',
  template: `
    <div [routerLink]="['/planets', planet.id]">
      <h2>{{ planet?.name }}</h2>
      <app-planet-details></app-planet-details>
    </div>
  `,
  styles: [],
})
export class PlanetThumbnailComponent implements OnInit {
  @Input() planet: any;

  constructor() {}

  ngOnInit(): void {}
}
