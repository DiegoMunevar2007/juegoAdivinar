/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormNumeroComponent } from './formNumero.component';

describe('FormNumeroComponent', () => {
  let component: FormNumeroComponent;
  let fixture: ComponentFixture<FormNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
