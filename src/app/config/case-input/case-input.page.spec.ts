import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInputPage } from './case-input.page';

describe('CaseInputPage', () => {
  let component: CaseInputPage;
  let fixture: ComponentFixture<CaseInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
