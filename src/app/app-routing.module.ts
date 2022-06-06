import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PlanetDetailsComponent } from './planet/planet-details/planet-details.component';
import { PlanetRouteActivator } from './planet/planet-details/planet-route-activator.service';
import { CreatePlanetComponent } from './planets/create-planet/create-planet.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';

const routes: Routes = [
  { path: 'planets/new', component: CreatePlanetComponent, canDeactivate: ['canDeactivateCreatePlanet'] },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'planets/:id', component: PlanetDetailsComponent, canActivate: [PlanetRouteActivator] },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
