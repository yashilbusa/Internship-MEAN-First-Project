import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl= 'http://localhost:3012'

  constructor(private http:HttpClient) { }

  getMessage():Observable<any>{
    return this.http.get(this.apiUrl,{responseType: 'text'});
  }
}
