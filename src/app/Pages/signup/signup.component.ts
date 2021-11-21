import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  model = {
    email: '',
    fName: '',
    lName: '',
    password: '',
    username: '',
  };

  ngOnInit() {}

  method1() {
    this.http.post('https://ivehicle.herokuapp.com/userSignup', {
      params: { email: this.model.email, firstName: this.model.fName, lastName: this.model.lName, password: this.model.password, username: this.model.username }
    }).subscribe((response:any) => {
      if (response) {
        this.router.navigate(['/home']);
      }
      else{
        console.log("error")
      }
    });
  }
}
