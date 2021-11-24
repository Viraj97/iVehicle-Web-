import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  model = {
    email: '',
    fName: '',
    lName: '',
    password: '',
    username: '',
  };

  ngOnInit() {}
  sweetAlertSuccess(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registration Successfull',
      showConfirmButton: false,
      timer: 1500
    })
  }
  sweetAlertError(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Please re-check the fields',
      showConfirmButton: false,
      timer: 1500
    })
  }
  method1() {
    this.http
      .post('https://ivehicle.herokuapp.com/userSignup', {
        email: this.model.email,
        firstName: this.model.fName,
        lastName: this.model.lName,
        password: this.model.password,
        username: this.model.username,
      })
      .subscribe((response: any) => {
        if (response) {
          this.router.navigate(['/']);
          this.sweetAlertSuccess
        } else {
          console.log('error');
          this.sweetAlertError
        }
      });
  }
}
