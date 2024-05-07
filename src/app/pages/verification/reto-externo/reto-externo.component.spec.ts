/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetoExternoComponent } from './reto-externo.component';

describe('RetoExternoComponent', () => {
  let component: RetoExternoComponent;
  let fixture: ComponentFixture<RetoExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
