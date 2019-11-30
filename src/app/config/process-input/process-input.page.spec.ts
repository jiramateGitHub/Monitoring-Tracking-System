import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInputPage } from './process-input.page';

describe('ProcessInputPage', () => {
  let component: ProcessInputPage;
  let fixture: ComponentFixture<ProcessInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
