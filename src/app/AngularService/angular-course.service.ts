import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iangularcourses } from '../model/iangularcourses';

@Injectable({
  providedIn: 'root'
})
export class AngularCourseService {

  courses: any;
  private url: string = "../assets/angularcourses.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";  

  constructor(private httpClient: HttpClient) { }
  getAngularCourses(): Observable<Iangularcourses[]> {
    this.courses = this.httpClient.get<Iangularcourses[]>(this.url);
    return this.courses;
  }
}
