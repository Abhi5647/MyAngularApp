import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  private sharedData=new Subject<any>();
  constructor() { }

  public getValue(): Observable<any>{
    console.log("en")
    this.sharedData.subscribe(e => {
      console.log("getting : ", e);
    })
    return this.sharedData;
  }
  public setValue(value:any): void{
    console.log("setting : ", value);
    this.sharedData.next(value);
  }
}
