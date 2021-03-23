import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproducts } from '../model/iproducts';

@Injectable({
  providedIn: 'root'
})
export class PdataService {

  products: any;
  private url: string = "../assets/products.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";  

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Iproducts[]> {
    this.products = this.httpClient.get<Iproducts[]>(this.url);
    return this.products;
  }
    
}
