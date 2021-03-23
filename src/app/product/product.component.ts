import { Component, OnInit } from '@angular/core';
import { PdataService } from '../Productservices/pdata.service';
import { DeleteService } from '../Sharedservices/delete.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  products = [];
  prodErrorMsg;
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  constructor(private employeeService: PdataService) { }
  myData: any;
  ngOnInit(): void {
    this.employeeService.getProducts().subscribe(
      success => this.products = success,
      error => this.prodErrorMsg = error
    )
  }

  //ngOnInit(): void {
  //  this.employeeService.currentData.subscribe(data => this.myData = data)
  //}

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
