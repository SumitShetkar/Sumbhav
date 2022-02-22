import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationForm : FormGroup
  firstName = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)])
  lastName = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)])
  email = new FormControl('',[Validators.required,Validators.email])
  phoneNo = new FormControl('',[Validators.required,RegisterComponent.phoneLength])
  dob = new FormControl('',Validators.required)
  gender = new FormControl('male')
  country = new FormControl('',Validators.required)
  state = new FormControl('',Validators.required)
  city = new FormControl('',Validators.required)

  borderClass : any = '';

  constructor(private fb : FormBuilder) {
    this.registerationForm =  this.fb.group({
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      phoneNo : this.phoneNo,
      dob :  this.dob,
      gender : this.gender,
      country : this.country,
      state :this.state,
      city : this.city
    })
   }

  ngOnInit() {
  }

  static phoneLength(control : AbstractControl){
    let phn = JSON.stringify(control.value)
    if(phn.length < 10)
    {
        return {phoneLength : true}
    }else
    {
      return null
    }
  }
 
 
  onRegister(){

  }
}
