import { Component, OnInit } from '@angular/core';
import { WebCourseService } from '../WebService/web-course.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  courses = [];
  courseErrorMsg = '';
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  constructor(private webService: WebCourseService) { }

  ngOnInit(): void {
    this.webService.getWebCourses().subscribe(
      success => this.courses = success,
      error => this.courseErrorMsg = error
    )
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
