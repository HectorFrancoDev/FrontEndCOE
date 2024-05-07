import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../loginData';
import { Observable } from 'rxjs';
import { User } from '../../users/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.baseUrl + '/auth/login';

  constructor(private http: HttpClient) {}

  /**
   * Servicio de Login
   * @returns LoginData
   */
  login(user: User): Observable<LoginData> {
    return this.http.post<LoginData>(this.apiUrl, user, );
  }
}
