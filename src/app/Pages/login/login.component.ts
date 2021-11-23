import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  model = {
    uName: '',
    pw: '',
  };

  ngOnInit() {}

  sweetAlertSuccess(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You Have Successfully Logged in',
      showConfirmButton: false,
      timer: 1500
    })
  }
  sweetAlertError(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Problem With your username or password',
      showConfirmButton: false,
      timer: 1500
    })
  }
  method1() {
    this.http
      .post('https://ivehicle.herokuapp.com/userLogin', {
        username: this.model.uName,
        password: this.model.pw,
      })
      .subscribe((response: any) => {
        if (response) {
          this.router.navigate(['/home']);
          this.sweetAlertSuccess();
        } else {
          console.log('error');
          this.sweetAlertError();
        }
      });
  }
}
