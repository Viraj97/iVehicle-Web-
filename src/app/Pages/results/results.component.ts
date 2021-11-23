import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  items: any = [];
  state: any = [];
  searchQuery: any = '';
  navigation: any;

  constructor(private http: HttpClient, private router: Router) {
    this.navigation = this.router.getCurrentNavigation();
    if(this.navigation){
      this.items = this.navigation.extras.state.items;
    }
    
  }
  ngOnInit(): void {
    // this.method1();
  }

  addItem(value: any) {
    this.items = value;
  }

}
