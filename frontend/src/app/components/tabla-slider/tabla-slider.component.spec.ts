import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSliderComponent } from './tabla-slider.component';

describe('TablaSliderComponent', () => {
  let component: TablaSliderComponent;
  let fixture: ComponentFixture<TablaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
