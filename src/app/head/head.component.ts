import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  searchStatus = false;
  serchDetailsStatus = false;
  showNavStatus = false;
  constructor() { }

  ngOnInit() {
  }

  shengesearchStatus () {
    this.searchStatus = !this.searchStatus;
    this.serchDetailsStatus = false;
  }

  showNav () {
    this.showNavStatus = !this.showNavStatus;
    this.serchDetailsStatus = false;
  }
}
