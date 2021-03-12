import { BrandResponseModel } from '../models/BrandResponseModel';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class BrandService{

  url = 'https://localhost:44306/api/brands/getall';

  constructor(private httpClient:HttpClient){}

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.url)
  }
}
