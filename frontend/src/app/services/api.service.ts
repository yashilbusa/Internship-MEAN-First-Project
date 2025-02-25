import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl= 'http://localhost:3012/'
  taskUrl = 'http://localhost:3012/tasks'

  constructor(private http:HttpClient) { }

  getMessage():Observable<any>{
    return this.http.get(this.apiUrl,{responseType: 'text'});
  }

  fetchTask():Observable<any>{
    return this.http.get(this.taskUrl,{responseType: 'text'});
  }

  // createTask():Observable<any>{
  //   return this.http.post(this.taskUrl,{
  //     "title":"Job Interview",
  //     "description":"Selected Or Not",
  //     "completed":true
  //   },{
  //     headers: { 'Content-Type': 'application/json' }
  // });
  // }
}
