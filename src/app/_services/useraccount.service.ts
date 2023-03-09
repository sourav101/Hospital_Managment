
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Model/user.model';


const url ='http://localhost:9098/api/users'

@Injectable({
    providedIn:'root'
})
export class UserAccountService{
constructor(private http: HttpClient) { }
  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(url + '/getusers');
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}