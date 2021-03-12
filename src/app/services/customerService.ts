import { CustomerResponseModel } from './../models/CustomerResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class CustomerService{

  url='https://localhost:44306/api/customers/getall';

  constructor(private httpClient:HttpClient){}

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.url)
  }

}
