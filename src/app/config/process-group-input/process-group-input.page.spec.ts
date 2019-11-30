import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessGroupInputPage } from './process-group-input.page';

describe('ProcessGroupInputPage', () => {
  let component: ProcessGroupInputPage;
  let fixture: ComponentFixture<ProcessGroupInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessGroupInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessGroupInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
