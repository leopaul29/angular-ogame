import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { PlanetService } from 'src/app/planets/shared/planet.service';

@Injectable()
export class PlanetRouteActivator implements CanActivate {
  constructor(private planetService: PlanetService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const planetExists = !!this.planetService.getPlanet(+route.params['id']);

    if (!planetExists) this.router.navigate(['/404']);

    return planetExists;
  }
}
