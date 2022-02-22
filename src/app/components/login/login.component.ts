import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  email = new FormControl('',[Validators.required,Validators.email])
  password = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(6)])


  constructor(private fb : FormBuilder) { 
    this.loginForm = this.fb.group({
      email : this.email,
      password : this.password
    })
  }

  ngOnInit() {
  }
  
  onLogin(){

  }
}
