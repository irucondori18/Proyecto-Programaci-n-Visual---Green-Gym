import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StathorariosComponent } from './stathorarios.component';

describe('StathorariosComponent', () => {
  let component: StathorariosComponent;
  let fixture: ComponentFixture<StathorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StathorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StathorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
