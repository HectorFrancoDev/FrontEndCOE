import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string {
    const token = localStorage.getItem('x-token');
    return token !== null ? token : '';
  }

  setToken(token: string, id_user: string, email: string) {
    localStorage.setItem('x-token', token);
    localStorage.setItem('id_user', id_user)
    localStorage.setItem('email', email)
  }

  getLocalStorage() {
    return {
      'x-token': localStorage.getItem('x-token'),
      'id_user': localStorage.getItem('id_user'),
      'email': localStorage.getItem('email')
    };
  }

  clearStorage() {
    localStorage.clear();
  }
}
