import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureInputPage } from './procedure-input.page';

describe('ProcedureInputPage', () => {
  let component: ProcedureInputPage;
  let fixture: ComponentFixture<ProcedureInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
