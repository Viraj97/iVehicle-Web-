import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  model = {
    uName: '',
    pw: '',
  };

  ngOnInit() {}

  method1() {
    this.http.post('https://ivehicle.herokuapp.com/userLogin', {
      params: { username: this.model.uName, password: this.model.pw }
    }).subscribe((response:any) => {
      if (response[0].login) {
        this.router.navigate(['/home']);
      }
      else{
        console.log("error")
      }
    });
  }

}
