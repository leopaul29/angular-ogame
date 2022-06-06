import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <h1>Edit Your Profile</h1>
    <hr />
    <div>
      <h3>[Edit profile form will go here]</h3>
      <br /><br />
      <button type="submit" class="button-primary">Save</button
      ><button type="button" (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cancel() {
    
  }
}
