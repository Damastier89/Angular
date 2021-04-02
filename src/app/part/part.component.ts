import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  someText = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.someText = 'Hello Some text';
  }
}
