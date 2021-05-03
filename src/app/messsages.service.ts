import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesssagesService {

  constructor() { }
  messages: string [] = [];

  add(message: string){
    this.messages.push(message);
  }
    
  clear() {
    this.messages = [];
  }
}

