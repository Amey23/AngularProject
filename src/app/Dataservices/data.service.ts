import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployees } from '../model/iemployees';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = "../assets/employee.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private httpClient: HttpClient) { }
  getEmployees(): Observable<Iemployees[]> {
    return this.httpClient.get<Iemployees[]>(this.url)
  }
}
