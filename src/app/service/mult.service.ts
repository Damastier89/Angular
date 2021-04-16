import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable({
  providedIn: 'root'
})
export class MultService {

constructor( public readonly mult: CountService) { }

public multiplication() {
  this.mult.counter *= 2
}

}
