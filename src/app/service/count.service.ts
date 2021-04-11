import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  counter = 0

  constructor() { }

  increase(){
    this.counter++
  }

  decrease() {
    this.counter--
  }

}
