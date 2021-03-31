/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgIFComponent } from './ngIF.component';

describe('NgIFComponent', () => {
  let component: NgIFComponent;
  let fixture: ComponentFixture<NgIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
