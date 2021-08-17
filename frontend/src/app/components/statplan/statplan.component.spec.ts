import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatplanComponent } from './statplan.component';

describe('StatplanComponent', () => {
  let component: StatplanComponent;
  let fixture: ComponentFixture<StatplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
