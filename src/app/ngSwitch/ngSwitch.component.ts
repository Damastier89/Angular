import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngSwitch',
  templateUrl: './ngSwitch.component.html',
  styleUrls: ['./ngSwitch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  toggle: any = false;

  constructor() { }

  ngOnInit() {
  }

}
