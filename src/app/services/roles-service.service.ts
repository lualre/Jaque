import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../components/users/roles';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RolesService {
  rolesUrl = `${environment.baseUrl}/roles.json`;
  constructor(private http: HttpClient) { }

  getRoles(): Observable<{roles: Roles[]}> {
    return this.http.get<{roles: Roles[]}>(this.rolesUrl);
  }
}
