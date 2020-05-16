import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRosterComponent } from './check-roster.component';

describe('CheckRosterComponent', () => {
  let component: CheckRosterComponent;
  let fixture: ComponentFixture<CheckRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
