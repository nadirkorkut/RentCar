import { CarDetailResponseModel } from './../models/CarDetailResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class CarDetailService{

  url = 'https://localhost:44306/api/cars/getcardetails';

  constructor(private httpClient:HttpClient){}

  getCarDetails():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.url)
  }

}
