import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../models/RentalResponseModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class RentalService{

  url = 'https://localhost:44306/api/rentals/getrentaldetails';

  constructor(private httpClient:HttpClient){}

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.url)
  }

}
