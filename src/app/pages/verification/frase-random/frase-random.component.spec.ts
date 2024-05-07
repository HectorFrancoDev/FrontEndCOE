/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FraseRandomComponent } from './frase-random.component';

describe('FraseRandomComponent', () => {
  let component: FraseRandomComponent;
  let fixture: ComponentFixture<FraseRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraseRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
