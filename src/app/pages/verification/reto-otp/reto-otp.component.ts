import { Component, OnInit } from '@angular/core';
import { OTP } from '../otp';
import { VerificationService } from '../services/verification.service';
import { TokenService } from '../../auth/services/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reto-otp',
  templateUrl: './reto-otp.component.html',
  styleUrls: ['./reto-otp.component.css'],
})
export class RetoOtpComponent implements OnInit {
  public otp: OTP = {
    otpCode: '',
  };

  email = localStorage.getItem('email');

  constructor(
    private verificationService: VerificationService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.verificationService.sendOTP(this.email).subscribe(() => {
      window.alert('OTP enviado a ' + this.email);
    });
  }

  acceptOTP() {
    if (this.otp.otpCode == '' || this.otp.otpCode == undefined) {
      window.alert('Escribe el OTP');
      return;
    }

    this.verificationService
      .verifyOTP(this.email, this.otp.otpCode)
      .subscribe((data) => {
        this.router.navigate(['/home'])
      });
  }

  resendOTP() {
    this.verificationService.sendOTP(this.email).subscribe(() => {
      window.alert('OTP enviado a ' + this.email);
    });
  }
}
