import { Injectable } from '@angular/core';
import { CountService } from './count.service';
import { LogService } from './log.service';

@Injectable()
export class LocalCounterService {
  counter = 0

  constructor( private readonly logService: LogService) { }

  increase(){
    this.logService.log(`increase count`)
    this.counter++
  }

  decrease() {
    this.logService.log(`decrease count`)
    this.counter--
  }


}
