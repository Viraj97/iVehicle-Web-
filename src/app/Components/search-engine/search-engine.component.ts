import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css'],
})
export class SearchEngineComponent implements OnInit {
  @Input() vehicleItems: any = [];
  @Output() newItemEvent = new EventEmitter<string>();

  model = {
    searchQuery: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sweetAlertSuccess(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '',
      showConfirmButton: false,
      timer: 1500
    })
  }
  method1() {
    this.http
      .get('https://ivehicle.herokuapp.com/search', {
        params: {
          query: this.model.searchQuery,
        },
      })
      .subscribe((response:any) => {
        this.vehicleItems = response;
        this.newItemEvent.emit(this.vehicleItems);
      });
  }

  searchQueryModified(event: KeyboardEvent) {
    this.model.searchQuery = (event.target as HTMLInputElement).value;
  }

  searchEnterPressed() {
    this.method1();
    this.sweetAlertSuccess();
  }
}
