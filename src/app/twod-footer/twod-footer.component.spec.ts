import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodFooterComponent } from './twod-footer.component';

describe('TwodFooterComponent', () => {
  let component: TwodFooterComponent;
  let fixture: ComponentFixture<TwodFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
