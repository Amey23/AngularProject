import { Component, OnInit } from '@angular/core';
import { JavacourseService } from '../JavaService/javacourse.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  courses = [];
  courseErrorMsg = '';
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  constructor(private jcService: JavacourseService) { }

  ngOnInit(): void {
    this.jcService.getJavaCourses().subscribe(
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
