import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-thumbnail',
  template: `
  <div class="planet">
    <h3>{{planet?.name}}</h3>
    <div>size: {{planet.size}}</div>
    <div *ngIf="planet?.location">
      <span>Solar System: {{planet.location.ss}}</span>
      <span>Galaxy: {{planet.location.g}}</span>
      <span>Position: {{planet.location.p}}</span>
    </div>
    <div *ngIf="planet?.resources">
      <h4>Resources</h4>
      <div [hidden]="!planet.resources.iron">iron: {{planet.resources.iron}}</div>
      <div [hidden]="!planet.resources.crystal">crystal: {{planet.resources.crystal}}</div>
      <div [hidden]="!planet.resources.deuterium">deuterium: {{planet.resources.deuterium}}</div>
      <div [hidden]="!planet.resources.energy">energy: {{planet.resources.energy}}</div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class PlanetThumbnailComponent implements OnInit {
  @Input() planet: any
  constructor() { }

  ngOnInit(): void {
  }

}
