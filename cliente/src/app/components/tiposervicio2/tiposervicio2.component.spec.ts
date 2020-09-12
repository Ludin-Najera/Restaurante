import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiposervicio2Component } from './tiposervicio2.component';

describe('Tiposervicio2Component', () => {
  let component: Tiposervicio2Component;
  let fixture: ComponentFixture<Tiposervicio2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tiposervicio2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiposervicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
