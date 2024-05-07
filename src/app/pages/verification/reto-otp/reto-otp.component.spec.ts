/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetoOtpComponent } from './reto-otp.component';

describe('RetoOtpComponent', () => {
  let component: RetoOtpComponent;
  let fixture: ComponentFixture<RetoOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
