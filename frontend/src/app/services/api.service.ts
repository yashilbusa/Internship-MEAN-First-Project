import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl= 'https://localhost:3012/'
  constructor(private http:HttpClient) { }

  getMessage():any{
    this.http.get(this.apiUrl)
  }
}
