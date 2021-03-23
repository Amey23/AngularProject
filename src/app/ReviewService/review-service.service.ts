import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ireview } from '../model/ireview';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  reviews: any;
  private url: string = "../assets/reviews.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";  

  constructor(private httpClient: HttpClient) { }
  getReviews(): Observable<Ireview[]> {
    this.reviews = this.httpClient.get<Ireview[]>(this.url);
    return this.reviews;
  }
}
