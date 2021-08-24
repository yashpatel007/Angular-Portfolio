import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedHeroComponent } from './threed-hero.component';

describe('ThreedHeroComponent', () => {
  let component: ThreedHeroComponent;
  let fixture: ComponentFixture<ThreedHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
