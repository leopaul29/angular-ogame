import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-planet',
  template: `
    <h1>New Planet</h1>
    <hr />
    <div>
      <h3>[Create Planet form will go here]</h3>
      <br /><br />
      <button type="submit" class="button-primary">Save</button
      ><button type="button" (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: [],
})
export class CreatePlanetComponent implements OnInit {
  isDirty: boolean = true
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['/planets']);
  }
}
