import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateInputPage } from './state-input.page';

describe('StateInputPage', () => {
  let component: StateInputPage;
  let fixture: ComponentFixture<StateInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
