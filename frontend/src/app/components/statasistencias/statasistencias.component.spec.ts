import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatasistenciasComponent } from './statasistencias.component';

describe('StatasistenciasComponent', () => {
  let component: StatasistenciasComponent;
  let fixture: ComponentFixture<StatasistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatasistenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatasistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
