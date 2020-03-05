import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  loadUsers() {
    let url = `http://localhost:8080/users.json`;
    return this.http.get(url).map((resp: any) => {
      return resp.users});
  }
}
