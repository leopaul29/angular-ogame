import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { OgameAppComponent } from './ogame-app.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { PlanetThumbnailComponent } from './planets/planet-thumbnail/planet-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    OgameAppComponent,
    PlanetsListComponent,
    PlanetThumbnailComponent,
    NavbarComponent
  ],
  bootstrap: [OgameAppComponent]
})
export class AppModule { }
