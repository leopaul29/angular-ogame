import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { OgameAppComponent } from './ogame-app.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PlanetRouteActivator } from './planet/planet-details/planet-route-activator.service';
import { NavbarComponent, NavbarPlanetsComponent } from './nav/index';
import {
  CreatePlanetComponent,
  PlanetService,
  PlanetThumbnailComponent,
  PlanetsListComponent,
} from './planets/index';
import {
  PlanetOverviewComponent,
  PlanetDetailsComponent,
} from './planet/index';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    OgameAppComponent,
    PlanetsListComponent,
    PlanetThumbnailComponent,
    NavbarComponent,
    PlanetDetailsComponent,
    PlanetOverviewComponent,
    NavbarPlanetsComponent,
    CreatePlanetComponent,
    NotFoundComponent,
  ],
  providers: [
    PlanetService,
    PlanetRouteActivator,
    { provide: 'canDeactivateCreatePlanet', useValue: checkDirtyState },
  ],
  bootstrap: [OgameAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreatePlanetComponent) {
  if (component.isDirty)
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  return true;
}
