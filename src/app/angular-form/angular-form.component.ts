import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent{
  reviews = [];
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  myData = [];
  isselected = true;
  address = {
    street: '',
    city: '',
    postalcode: ''
  };

  submitData(formData: any) {
    this.myData.push(formData);
    //this.userForm.reset();
    //console.log(formData)
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

  //userModal = new User();

  //constructor() { }

  //onSubmit() {
  //  alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //  console.table(this.userModal);
  //}

  //public id: number;
  //public name: string;
  //public power: string;
  //public alterEgo?: string;

  //powers = ['Really Smart', 'Super Flexible',
  //  'Super Hot', 'Weather Changer'];

  //model;

  //submitted = false;

  //onSubmit() { this.submitted = true; }

  //newHero() {
  //  this.model = new Hero(42, '', '');
  //}

  

}
