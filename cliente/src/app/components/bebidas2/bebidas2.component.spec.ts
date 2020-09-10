import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bebidas2Component } from './bebidas2.component';

describe('Bebidas2Component', () => {
  let component: Bebidas2Component;
  let fixture: ComponentFixture<Bebidas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bebidas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bebidas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
