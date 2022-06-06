import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPlanetsComponent } from './navbar-planets.component';

describe('NavbarPlanetsComponent', () => {
  let component: NavbarPlanetsComponent;
  let fixture: ComponentFixture<NavbarPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
