import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iwebcourses } from '../model/iwebcourses';

@Injectable({
  providedIn: 'root'
})
export class WebCourseService {

  courses: any;
  private url: string = "../assets/webcourses.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";  

  constructor(private httpClient: HttpClient) { }
  getWebCourses(): Observable<Iwebcourses[]> {
    this.courses = this.httpClient.get<Iwebcourses[]>(this.url);
    return this.courses;
  }
}
