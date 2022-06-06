import { Component } from '@angular/core';

@Component({
  selector: 'app-ogame-app',
  template: `
    <app-navbar-planets></app-navbar-planets>
    <router-outlet></router-outlet>
  `,
})
export class OgameAppComponent {}
