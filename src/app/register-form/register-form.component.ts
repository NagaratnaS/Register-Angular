import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Constants } from '../constants/constants';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  genders=['Male','Female'];
  name = "";
  email = "";
  phno = 0;
  password="";
  confPass="";


  boolName = true;
  boolEmail = true;
  boolPhno = true;
  boolPass = true;
  boolConfPass = true;
  boolDisabled=true;

  status = ''
  constructor(private http: HttpClient, private router: Router) { }


  checkName(event: any) {
    this.name = event.target.value;
    if (this.name.length < 3 || this.name.length > 10 || !this.name.match(Constants.REGEXNAME))
     this.boolName = false;
    else
     this.boolName =true;
     this.checkButton();
  }

  checkEmail(event: any) {
    this.email = event.target.value;
    if (!this.email.match(Constants.REGEXEMAIL))
     this.boolEmail = false;
    else
     this.boolEmail = true;
    this.checkButton();
  }

  checkPhno(event: any) {
    this.phno = event.target.value;
    if (!this.phno.toString().match(Constants.REGEXPHNO))
     this.boolPhno = false;
    else
     this.boolPhno = true;
     this.checkButton();
  }

  checkPass(event: any) {
    this.password = event.target.value;
    if (!this.password.match(Constants.REGEXPASSWORD))
     this.boolPass = false;
    else
     this.boolPass = true;
     this.checkButton();
  }

  checkConfPass(event: any) {
    this.confPass = event.target.value;
    if (this.confPass != this.password)
     this.boolConfPass = false;
    else
     this.boolConfPass = true;
     this.checkButton();
  }

  checkButton() {
    this.boolDisabled = !(this.boolName && this.boolEmail && this.boolPass && this.boolPhno && this.boolPass && this.boolConfPass);
    this.boolDisabled = !(this.name != "" && this.email != "" && this.phno.toString() != "" && this.password != "" && this.confPass != "");
  }

  onSubmit(form: NgForm) {
    form.value.contactNo = parseInt(form.value.contactNo)
    this.http.post(Constants.API + "save", form.value, {responseType: 'text'} )
    .subscribe(responsedata => {
      this.status = 'success';
      form.reset();
    }, error => {
      this.status = 'not_success';
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

}
