import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "./environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getData() {
      console.log(environment.apiURL);
      return this.http.get(environment.apiURL+'/api/data', { responseType: 'text' });
    }

}
