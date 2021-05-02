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


  boolEmail = true;
  boolDisabled=true;
  constructor(private http: HttpClient) { }




  checkEmail(event: any) {
    this.email = event.target.value;
    if (!this.email.match(Constants.REGEXEMAIL))
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

        this.status = 'success';
        form.reset(); // clear the form values
      

    }, error => {
      this.status = 'not_success';
    })
  }

  ngOnInit(): void {
  }

}
