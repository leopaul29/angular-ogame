import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-overview',
  template: `
    <div>
      <h2>Overview</h2>
      <div>size: {{ planet?.size }}</div>
      <div *ngIf="planet?.location">
        <span>Solar System: {{ planet.location.ss }}</span>
        <span>Galaxy: {{ planet.location.g }}</span>
        <span>Position: {{ planet.location.p }}</span>
      </div>
      <div *ngIf="planet?.resources">
        <h4>Resources</h4>
        <div [hidden]="!planet.resources.iron">
          iron: {{ planet.resources.iron }}
        </div>
        <div [hidden]="!planet.resources.crystal">
          crystal: {{ planet.resources.crystal }}
        </div>
        <div [hidden]="!planet.resources.deuterium">
          deuterium: {{ planet.resources.deuterium }}
        </div>
        <div [hidden]="!planet.resources.energy">
          energy: {{ planet.resources.energy }}
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PlanetOverviewComponent implements OnInit {
  @Input() planet: any;
  constructor() {}

  ngOnInit(): void {}
}
