import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodProjectsgridComponent } from './twod-projectsgrid.component';

describe('TwodProjectsgridComponent', () => {
  let component: TwodProjectsgridComponent;
  let fixture: ComponentFixture<TwodProjectsgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodProjectsgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodProjectsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
