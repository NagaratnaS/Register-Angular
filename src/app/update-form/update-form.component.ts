import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../constants/constants';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  genders = ["Male", "Female"]
  name = "";
  email = "";
  phno = 0;
  status = '';

  boolName = true;
  boolEmail = true;
  boolPhno = true;

  boolDisabled=true;
  constructor(private http: HttpClient) { }


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


  checkButton() {
    this.boolDisabled = !(this.boolName && this.boolEmail  && this.boolPhno );
    this.boolDisabled = !(this.name != "" && this.email != "" && this.phno.toString() != "" );
  }

  onSubmit(form: NgForm){
    form.value.contactNo = parseInt(form.value.contactNo);
    this.http.put(Constants.API + "updatebyemail", form.value, {responseType: "text"}).subscribe(
      responsedata => {

        if (responsedata == "updated successfully"){
          this.status = 'success';
         form.reset();
        }
        else
         this.status = 'not_success';
      }
    )
  }

  ngOnInit(): void {
  }

}
