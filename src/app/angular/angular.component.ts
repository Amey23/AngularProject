import { Component, OnInit } from '@angular/core';
import { AngularCourseService } from '../AngularService/angular-course.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  courses = [];
  courseErrorMsg = '';
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  constructor(private angularService: AngularCourseService) { }

  ngOnInit(): void {
    this.angularService.getAngularCourses().subscribe(
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
