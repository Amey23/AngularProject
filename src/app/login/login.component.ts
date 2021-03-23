import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginS: string;
  users = [
    {
      "emailid": "Sandeep@gmail.com",
      "password":"Sandeep@123"
    },
    {
      "emailid": "Pranati@gmail.com",
      "password": "Pranati@123"
    },
    {
      "emailid": "Pritesh@gmail.com",
      "password": "Pritesh@123"
    }
  ]

  constructor(private router: Router) { }

  onClickSubmit(data) {
    //alert("Entered Email id : " + data.emailid);
    //alert("Entered Password : " + data.password);
    //if (data.emailid == 'admin' && data.password == 'admin') {
    //  //this.loginS = 'Success';
    //  //window.location.href = "/Home";
    //  this.router.navigateByUrl("/Home");
    //}
    //else {
    //  this.loginS = 'Invalid User Credentials';
    //}

    for (let user of this.users) {
      if ((data.emailid == user.emailid) && (data.password == user.password)) {
        //this.loginS = true;
        this.router.navigateByUrl("/Home");
        //this.router.navigate([`Gateway`])
      }
    }
    this.loginS = 'Invalid User Credentials';          
  }

  // loginData=[{"name":"sandeep", "password": "Qwerty123"},
  // {"name":"amey", "password": "Qwerty123"},
  // ]

  // name:string = "";
  // password:string = "";
  //loginS: boolean = false;
  //errorMsg = 'Invalid Credentials';
  //uname = ["sandeep", "amey"];
  //pass = ["Qwerty@123", "Qwerty@123"]

  //constructor(private formBuilder: FormBuilder, private router: Router) { }
  //users = [
  //  {
  //    "name": "Sandeep",
  //    "password":"Sandeep@123"
  //  },
  //  {
  //    "name": "Pritesh",
  //    "password": "Pritesh@123"
  //  }
  //]

  //userForm = this.formBuilder.group({
  //  name: ['', [Validators.required, Validators.pattern('^[a-z,A-Z\\s]{5,15}$')]],

  //  email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+')]],
  //  password: ['', [Validators.required]],

  //})

  //submitData(data) {
  //  //console.log(data.name, data.password)
  //  //window.location.href = 'https://www.google.co.in/';
  //  for (let user of this.users) {
  //    if ((data.name == user.name) && (data.password == user.password)) {
  //      this.loginS = true;
  //      window.location.href = 'https://www.google.co.in/';
  //      //this.router.navigate([`Gateway`])
  //    }
  //    //else {
  //    //  this.loginS = false;;
  //    //}
  //  }
  //}



  // submitData(){
  //   console.log(this.userForm.value)

  // }
}
