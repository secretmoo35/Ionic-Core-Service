import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestApiService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiService {

  constructor(public http: HttpClient) {
    console.log('Hello RestApiService');
  }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  get(url: string) {
    return this.http.get(url, { headers: this.authorizationHeader() }).toPromise();
  }

  post(url: string, Body: any) {
    return this.http.post(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  put(url: string, Body: any) {
    return this.http.put(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  delete(url: string) {
    return this.http.delete(url, { headers: this.authorizationHeader() }).toPromise();
  }


}
