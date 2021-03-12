import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/CarResponseModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class CarService{

  url = 'https://localhost:44306/api/cars/getall';

  constructor(private httpClient:HttpClient){}

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.url)
  }
}
