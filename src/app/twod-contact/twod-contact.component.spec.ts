import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodContactComponent } from './twod-contact.component';

describe('TwodContactComponent', () => {
  let component: TwodContactComponent;
  let fixture: ComponentFixture<TwodContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
