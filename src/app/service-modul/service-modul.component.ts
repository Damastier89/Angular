import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/count.service';

@Component({
  selector: 'app-service-modul',
  templateUrl: './service-modul.component.html',
  styleUrls: ['./service-modul.component.scss']
})
export class ServiceModulComponent implements OnInit {

  constructor(
    public readonly count: CountService,
  ) { }

  ngOnInit() {
  }

}
