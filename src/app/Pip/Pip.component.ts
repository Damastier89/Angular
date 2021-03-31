import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Pip',
  templateUrl: './Pip.component.html',
  styleUrls: ['./Pip.component.scss']
})
export class PipComponent implements OnInit {

  now: Date = new Date()

  constructor() { }

  ngOnInit() {
  }

}
