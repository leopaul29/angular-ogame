import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/planets/shared/planet.service';

@Component({
  selector: 'app-planet-details',
  template: `
    <div class="row">
      <div class="three columns">
        <app-navbar></app-navbar>
      </div>
      <div class="nine columns">
        <h2>{{ planet?.name }}</h2>
        <app-planet-overview [planet]="planet"></app-planet-overview>
      </div>
    </div>
  `,
  styles: [],
})
export class PlanetDetailsComponent implements OnInit {
  @Input() planet: any;
  constructor(
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.planet = this.planetService.getPlanet( // use '+' to cast it to number
      +this.route.snapshot.params['id']
    );
  }
}
