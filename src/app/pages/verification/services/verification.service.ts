import { Injectable } from '@angular/core';
import { OTP } from '../otp';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  private apiUrl: string = environment.baseUrl + '/verification';

  constructor(private http: HttpClient) {}

  /**
   * Servicio de Login
   * @returns LoginData
   */
  sendOTP(emailUser: any): Observable<OTP> {
    return this.http.post<OTP>(this.apiUrl + '/otp', { email: emailUser });
  }

  verifyOTP(emailUser: any, otpCode: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/verify', { email: emailUser, otp: otpCode });
  }
}
