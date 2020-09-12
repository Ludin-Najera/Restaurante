import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { complementosComponent as complementosComponent } from './complementos.component';

describe('complementosComponent', () => {
  let component: complementosComponent;
  let fixture: ComponentFixture<complementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ complementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(complementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
