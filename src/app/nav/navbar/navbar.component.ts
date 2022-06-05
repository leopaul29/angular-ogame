import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <ul>
      <li>Overview</li>
      <li>Resources</li>
      <li>Facilities</li>
      <li>Research</li>
      <li>Shipyard</li>
      <li>Defence</li>
      <li>Fleet</li>
      <li>Galaxy</li>
    </ul>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
