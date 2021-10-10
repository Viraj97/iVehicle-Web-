import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css'],
})
export class SearchCardComponent implements OnInit {
  @Input() item: any;

  constructor() {}
  model = this.initModel();
  submitted = false;

  ngOnInit(): void {
  }

  initModel() {
    return {
      title:  '',
      link: '',
      snippet: 'snippet',
    };
  }
}
