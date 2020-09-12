import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { menu2Component as menu2Component } from './menu2.component';

describe('UsuariosComponent', () => {
  let component: menu2Component;
  let fixture: ComponentFixture<menu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ menu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(menu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
