import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8000/tasks/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}${id}/`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}${id}/`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}${id}/`);
  }
  
  getByUser(user_id): Observable<any> {
    return this.http.get(`${baseUrl}?user_id=${user_id}`);
  }

}
