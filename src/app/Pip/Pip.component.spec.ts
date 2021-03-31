/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipComponent } from './Pip.component';

describe('PipComponent', () => {
  let component: PipComponent;
  let fixture: ComponentFixture<PipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
