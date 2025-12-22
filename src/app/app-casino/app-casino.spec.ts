import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCasino } from './app-casino';

describe('AppCasino', () => {
  let component: AppCasino;
  let fixture: ComponentFixture<AppCasino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCasino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCasino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
