import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodExperienceComponent } from './twod-experience.component';

describe('TwodExperienceComponent', () => {
  let component: TwodExperienceComponent;
  let fixture: ComponentFixture<TwodExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
