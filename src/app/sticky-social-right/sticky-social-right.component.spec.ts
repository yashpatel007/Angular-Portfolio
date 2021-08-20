import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySocialRightComponent } from './sticky-social-right.component';

describe('StickySocialRightComponent', () => {
  let component: StickySocialRightComponent;
  let fixture: ComponentFixture<StickySocialRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickySocialRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickySocialRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
