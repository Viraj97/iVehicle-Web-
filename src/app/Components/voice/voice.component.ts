import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {
  @Input() vehicleItems: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private http: HttpClient, private router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
  }

  method1(){
    Swal.fire({
      position: 'center',
      icon: 'question',
      title: '<p>Speak now!</p><p>Tell us what you want to search</p>',
      showConfirmButton: false,
      timer: 6000
    })
    this.method2();
  }
  method2(){
    this.http
    .get('https://ivehicle.herokuapp.com/search', {
      params: {
        query: 'toyota corolla',
      },
    })
    .subscribe((response:any) => {
      this.vehicleItems = response;
      this.newItemEvent.emit(this.vehicleItems);
      if (response) {
        this.router.navigate(['/results'], { state: { items: response } });
      }
    });
  }
}
