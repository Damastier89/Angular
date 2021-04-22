import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class MainValidator {

  static restrictedEmail(control: FormControl): {[key: string]: boolean} | null {
    if(['test@mail.ru', 'tests@mail.ru'].includes(control.value)) {
      return {
        restrictedEmail: true
      }
    }
    return null;
  }

  static unigEmail(control: FormControl): Promise<{[key: string]: boolean} | null> | Observable<{[key: string]: boolean} | null> {
    return new Promise(resolve => {
      setTimeout(()=> {
        if(control.value === `async@mail.ru`) {
          resolve({
            uniqEmail: true
          })
        } else {
          resolve(null)
        }
      },1000)
    })
  }

}
