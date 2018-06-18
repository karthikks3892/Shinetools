import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ValuesService {
  myMethod:Observable<any>;
  private myMethodSubject = new Subject<any>();


  constructor() { 
    this.myMethod = this.myMethodSubject.asObservable();

  }
  Method(data){
    this.myMethodSubject.next(data);
  }
}
