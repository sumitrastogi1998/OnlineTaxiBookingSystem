import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAvailabilityComponent } from './select-availability.component';

describe('SelectAvailabilityComponent', () => {
  let component: SelectAvailabilityComponent;
  let fixture: ComponentFixture<SelectAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
