import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { OgameAppComponent } from './ogame-app.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { PlanetThumbnailComponent } from './planets/planet-thumbnail/planet-thumbnail.component';
import { PlanetService } from './planets/shared/planet.service';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { NavbarPlanetsComponent } from './nav/navbar-planets/navbar-planets.component';
import { PlanetDetailsComponent } from './planet/planet-details/planet-details.component';
import { PlanetOverviewComponent } from './planet/planet-overview/planet-overview.component';
import { CreatePlanetComponent } from './planets/create-planet/create-planet.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PlanetRouteActivator } from './planet/planet-details/planet-route-activator.service';

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

export function checkDirtyState(component:CreatePlanetComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}