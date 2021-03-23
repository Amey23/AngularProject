import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ijavacourses } from '../model/ijavascourses';

@Injectable({
  providedIn: 'root'
})
export class JavacourseService {

  courses: any;
  private url: string = "../assets/javacourses.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";  

  constructor(private httpClient: HttpClient) { }
  getJavaCourses(): Observable<Ijavacourses[]> {
    this.courses = this.httpClient.get<Ijavacourses[]>(this.url);
    return this.courses;
  }
}
