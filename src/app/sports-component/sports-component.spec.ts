import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsComponent } from './sports-component';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
