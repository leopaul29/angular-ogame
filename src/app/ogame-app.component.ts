import { Component } from '@angular/core';

@Component({
  selector: 'app-ogame-app',
  template: `<div class="row">
    <div class="three columns">
      <app-navbar></app-navbar>
    </div>
    <div class="six columns">Content</div>
    <div class="three columns">
      <app-planets-list></app-planets-list>
    </div>
  </div>`,
})
export class OgameAppComponent {}
