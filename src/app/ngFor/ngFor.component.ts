import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngFor',
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.scss']
})
export class NgForComponent implements OnInit {

  arr: number[] = [1,2,3,4,5,]

    obj = [

      {title: 'Post_1', author: 'Sergei', comments: [
        {name: 'max', text: 'lorem1'},
        {name: 'max', text: 'lorem2'},
        {name: 'max', text: 'lorem3'}
      ] },
      {title: 'Post_2', author: 'Sergei_', comments: [
        {name: 'max_', text: 'lorem1'},
        {name: 'max_', text: 'lorem2'},
        {name: 'max_', text: 'lorem3'}
      ] } 
    
    ]

  constructor() { }

  ngOnInit() {
  }

}
