import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedurePage } from './procedure.page';

describe('ProcedurePage', () => {
  let component: ProcedurePage;
  let fixture: ComponentFixture<ProcedurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
