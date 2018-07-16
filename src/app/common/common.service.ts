import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  value1: number = 5;

  constructor() { }

  getValue1() {
    return this.value1;
  }

  setValue1(value:number) {
    this.value1 = value;
  }

  getAsyncData() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('DD');
      }, 100)
    });
    return resultPromise;
  }

}
