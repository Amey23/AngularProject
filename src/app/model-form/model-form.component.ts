import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent{
  public myForm: FormGroup;
  data: any;
  public payLoad: string;
  myData = [];
  emails = [{ email: "email1" }, { email: "email2" }, { email: "email3" }, { email: 'email4' }];
  fruits: Array<String> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];
  selectedFruitValues = [];
  newitem = [];
  isselected = true;
  
  constructor(private formBuilder: FormBuilder) {
  }


  websiteList: any = [
    { id: 1, name: 'Developer' },
    { id: 2, name: 'Tester' },
    { id: 3, name: 'Administrator' }
  ];

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
    gender: ['', Validators.required],
    place: ['', Validators.required],
    useremail: this.formBuilder.array([]),
    terms: ['', Validators.required],
    favFruits: this.addFruitsControls(),
    address: this.formBuilder.group({
      comments: ['', [Validators.required, Validators.pattern('^[A-Za-z]{5,15}$')]],
      postcode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    })
  })

  addFruitsControls() {
    const arr = this.fruits.map(item => {
      return this.formBuilder.control(false);
    });

    return this.formBuilder.array(arr);
  }

  get fruitsArray() {
    return <FormArray>this.userForm.get('favFruits');
  }

  getSelectedFruitsValue() {
    this.selectedFruitValues = [];
    this.fruitsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedFruitValues.push(this.fruits[i]);
      }
    });

    //this.favFruitsError = this.selectedFruitValues.length > 0 ? false : true;
  }
  //onChange(email: string, isChecked: boolean) {
  //  const emailFormArray = <FormArray>this.userForm.controls.useremail;

  //  if (isChecked) {
  //    emailFormArray.push(new FormControl(email));
  //  } else {
  //    let index = emailFormArray.controls.findIndex(x => x.value == email)
  //    emailFormArray.removeAt(index);
  //  }
  //}
  //userForm = new FormGroup({
  //  name: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //  email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
  //  address: new FormGroup({
  //    street: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //    postcode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')])
  //  })
  //})

  //customerForm = this.userForm.get('address')
  //this.myForm = this.formBuilder.group({
  //  name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  //  address: this.formBuilder.group({
  //    street: ['', <any>Validators.required],
  //    postcode: ['8000']
  //  })
  //});


  submitData() {
    //console.log(this.userForm.value)
    //this.payLoad = JSON.stringify(this.userForm.value);
    //this.newitem = this.selectedFruitValues;
    this.myData.push(this.userForm.value)
    this.userForm.reset();
    //this.myData['favFruits'] = this.selectedFruitValues;
    //console.log(this.newitem);
    //this.myData = this.myData.concat(newItem)
    //console.log(...this.userForm.value, newItem)
    //this.data = ({
    //  'Name': this.userForm.get('name'),
    //  'Email': this.userForm.get('email'),
    //  'Street': this.userForm.get('address.street')
    //})
  }

}
