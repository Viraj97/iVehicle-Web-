import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  method1() {
    this.http
      .get('http://127.0.0.1:8080/search', {
        params: {
          query: this.model.searchQuery,
        },
      })
      .subscribe((response) => {
        this.vehicleItems = response;
        this.newItemEvent.emit(this.vehicleItems);
      });
  }

  searchQueryModified(event: KeyboardEvent) {
    this.model.searchQuery = (event.target as HTMLInputElement).value;
  }

  searchEnterPressed() {
    this.method1();
  }
}
