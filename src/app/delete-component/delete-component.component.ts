import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../constants/constants';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})
export class DeleteComponentComponent implements OnInit {


  email = "";
  status = '';

  regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/

  boolEmail = true;
  boolDisabled=true;
  constructor(private http: HttpClient) { }




  checkEmail(event: any) {
    this.email = event.target.value;
    if (!this.email.match(this.regexEmail))
     this.boolEmail = false;
    else
     this.boolEmail = true;
    this.checkButton();
  }



  checkButton() {
    this.boolDisabled = !this.boolEmail;
  }

  onSubmit(form: NgForm){
    this.http.delete(Constants.API + 'deletebyemail', {
      params: {
        email: form.value.email
      },
      responseType: 'text'
    }).subscribe(responsedata => {

      if (responsedata == 'Deleted successfully'){
        this.status = 'success';
        form.reset();
      }

      else
       this.status = 'not_success';
      console.log(this.status)
    })
  }

  ngOnInit(): void {
  }

}
