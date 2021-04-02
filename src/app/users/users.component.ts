import { User } from './../interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

  userArr = [
    { id: 1, name: 'Sergei', age: 31, deposit: 7000},
    { id: 2, name: 'Elena', age: 28, deposit: 3700},
    { id: 3, name: 'Ivan', age: 45, deposit: 3000},
    { id: 4, name: 'Maxim', age: 37, deposit: 2000},
    { id: 5, name: 'Anna', age: 24, deposit: 4250}
  ]

  /* costumer: User[] = this.userArr */

  constructor() { }

  public getUserName() {
    return this.userArr.map(user => user.name).join(', ');
  }

  public getUserDeposit() {
    return this.userArr.reduce((acc ,user) => acc += user.deposit, 0 );
  }

  ngOnInit() {
  }

}
