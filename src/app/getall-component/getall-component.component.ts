import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants} from '../constants/constants'
import { User } from '../user.model';

@Component({
  selector: 'app-getall-component',
  templateUrl: './getall-component.component.html',
  styleUrls: ['./getall-component.component.css']
})
export class GetallComponentComponent implements OnInit {

  user: string[] = [];
  listhidden = true;
  gotTheData = '';
  email = "";

  boolEmail = true;
  boolDisabled = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkEmail(event: any) {
    this.email = event.target.value;
    if (!this.email.match(Constants.REGEXEMAIL))
     this.boolEmail = false;
    else
     this.boolEmail = true;
    this.checkButton();
  }

  checkButton() {
    this.boolDisabled = !this.email;
  }

  onSubmit(form: NgForm) {
    this.http.get(Constants.API + "getbyemail", {
      params: {
        email: form.value.email
      }
    }).subscribe(responsedata => {

      for(let key in responsedata){
        this.gotTheData = 'success';
        this.listhidden = false;
       if (typeof(responsedata[key]) == 'string')
        this.user.push(responsedata[key]);
       else if (typeof(responsedata[key]) == 'number')
        this.user.push(responsedata[key].toString());
      }

      if (this.listhidden == true)
       this.gotTheData = 'danger';


    })
  }

}
