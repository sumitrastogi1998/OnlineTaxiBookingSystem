import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTaxiComponent } from './register-taxi.component';

describe('RegisterTaxiComponent', () => {
  let component: RegisterTaxiComponent;
  let fixture: ComponentFixture<RegisterTaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
