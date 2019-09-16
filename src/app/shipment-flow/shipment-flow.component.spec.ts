import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentFlowComponent } from './shipment-flow.component';

describe('ShipmentFlowComponent', () => {
  let component: ShipmentFlowComponent;
  let fixture: ComponentFixture<ShipmentFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
