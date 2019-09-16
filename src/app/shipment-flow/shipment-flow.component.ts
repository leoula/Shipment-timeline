import { Component, OnInit } from '@angular/core';
import { ShipmentService } from './../shipment.service';
import { SeaShipment } from './../Ishipment';

@Component({
  selector: 'app-shipment-flow',
  templateUrl: './shipment-flow.component.html',
  styleUrls: ['./shipment-flow.component.css'],

  // inject the ShipmentService into our application 
  providers: [ShipmentService]
})
export class ShipmentFlowComponent implements OnInit {
  _shipmentsArray: SeaShipment[];
  
  constructor(private shipmentService: ShipmentService) {

  }


  // we need to subscribe to the shipmentService’s getShipmentDetail method (which is of type Observable)
  //  in order to tell the Angular eco-system that it should execute that method and in
  // turn make the HTTP GET call. If you don’t subscribe to the Observable it won’t 
  // be executed. 
  getShipmentDetail(): void {
    this.shipmentService.getShipmentDetail().subscribe(
      resultArray => this._shipmentsArray = resultArray,
      error => console.log("Error: " + error)
    )
  }

  ngOnInit(): void {
    this.getShipmentDetail();
    
  }

}
