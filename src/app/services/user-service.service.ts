import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/users/user';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = `${environment.baseUrl}/users.json`;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<{users: User[]}> {
    return this.http.get<{users: User[]}>(this.userUrl);
  }
}
