import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public titleClicked = new EventEmitter<any>()
  constructor() { }
}
