import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }
  getSources(){
    return this.http.get(`http://fakestoreapi.com/products`);
  }
}
