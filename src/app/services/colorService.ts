import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../models/ColorResponseModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class ColorService{

  url='https://localhost:44306/api/colors/getall';

  constructor(private httpClient:HttpClient){}

  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.url)
  }
}
