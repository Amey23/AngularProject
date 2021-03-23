import { Component, OnInit } from '@angular/core';
import { DataService } from '../Dataservices/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  employees = [];
  empErrorMsg;
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  constructor(private employeeService: DataService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      success => this.employees = success,
      error => this.empErrorMsg = error
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
