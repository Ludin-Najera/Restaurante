import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bebidasComponent as bebidasComponent } from './bebidas.component';

describe('Usuarios2Component', () => {
  let component: bebidasComponent;
  let fixture: ComponentFixture<bebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bebidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
