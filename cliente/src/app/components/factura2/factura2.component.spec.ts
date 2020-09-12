import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Factura2Component } from './factura2.component';

describe('Factura2Component', () => {
  let component: Factura2Component;
  let fixture: ComponentFixture<Factura2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Factura2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Factura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
