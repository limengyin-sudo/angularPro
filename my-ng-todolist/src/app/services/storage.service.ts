import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  }
  getItem(key){
    return JSON.parse(localStorage.getItem(key))
  }
}
