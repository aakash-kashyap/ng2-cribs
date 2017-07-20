import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

}
