import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bebidas2Component as bebidas2Component } from './bebidas2.component';

describe('Usuarios2Component', () => {
  let component: bebidas2Component;
  let fixture: ComponentFixture<bebidas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bebidas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bebidas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
