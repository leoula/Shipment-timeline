import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { SeaShipment, SeaMovement, Reading, Sample, AccessRight } from "./Ishipment";
import 'rxjs/add/operator/map';




// Allow the service to be injected into a component
@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  // This variable with the URL endpoint/ path to json file for the retrieval of the shipment from our API Server/local json file. 
  private _shipmentURL = "../assets/shipments.json";
  // private _URL = "https://jsonplaceholder.typicode.com/posts";
  private _URL = "../assets/shipments.json";
  constructor(private http: Http) {

  }

  // The getShipmentDetail method is declared to be of type Observable, the Observable will be casted to an array type seaShipments (which is an interface model I’ve made to mimic the JSON structure of the data's on the server). 
  
  getShipmentDetail():Observable<SeaShipment[]> {

    // Then map the response of the HTTP GET request to a JSON array of type seaShipment and return it. If there is an error, we can catch it and handle it
    return this.http
      .get(this._shipmentURL)
      .map((response: Response) => {
        return <SeaShipment[]>response.json();
      })
      .catch(this.handleError);
  }
 
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

 
}

