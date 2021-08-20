import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodAboutComponent } from './twod-about.component';

describe('TwodAboutComponent', () => {
  let component: TwodAboutComponent;
  let fixture: ComponentFixture<TwodAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
