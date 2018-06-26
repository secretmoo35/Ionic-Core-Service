import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  messageType: string = 'danger';
  message: string = '';

  constructor(public http: HttpClient) {
    console.log('Hello DataService Provider');
  }

  error(message){
    this.messageType = 'danger';
    this.message = message;
  }

  success(message){
    this.messageType = 'success';
    this.message = message;
  }

  warning(message){
    this.messageType = 'warning';
    this.message = message;
  }





}
