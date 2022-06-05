import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetThumbnailComponent } from './planet-thumbnail.component';

describe('PlanetThumbnailComponent', () => {
  let component: PlanetThumbnailComponent;
  let fixture: ComponentFixture<PlanetThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
