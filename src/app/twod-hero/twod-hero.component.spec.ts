import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodHeroComponent } from './twod-hero.component';

describe('TwodHeroComponent', () => {
  let component: TwodHeroComponent;
  let fixture: ComponentFixture<TwodHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
