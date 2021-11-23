import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-prof',
  templateUrl: './user-prof.component.html',
  styleUrls: ['./user-prof.component.css']
})
export class UserProfComponent implements OnInit {
  model = {
    email: '',
    firstName: '',
    lastName:'',
    userName:'',
    password:'',
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.method1();
  }

  method1() {
    this.http
      .post('https://ivehicle.herokuapp.com/findUserByEmail', {
        username:localStorage.getItem('userEmail')
      })
      .subscribe((response: any) => {
        this.model.email=response.email;
        this.model.firstName=response.firstName;
        this.model.lastName=response.lastName;
        this.model.userName=response.username;
        this.model.password=response.password;
      });
  }

  updateUser(){
    this.http
      .post('https://ivehicle.herokuapp.com/userSignup', {
        email: this.model.email,
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        password: this.model.password,
        username: this.model.userName,
      })
      .subscribe((response: any) => {
      });
  }
}
