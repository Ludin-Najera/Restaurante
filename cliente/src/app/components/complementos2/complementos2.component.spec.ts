import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Complementos2Component } from './complementos2.component';

describe('Complementos2Component', () => {
  let component: Complementos2Component;
  let fixture: ComponentFixture<Complementos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Complementos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Complementos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
