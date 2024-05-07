import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginData } from '../loginData';
import { User } from '../../users/user';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { TokenService } from '../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User = {
    email: '',
    password: '',
    is_active: true,
    name: 'Hector',
    _id: 'Algo',
  };

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    console.log(this.user);

    this.authService.login(this.user).subscribe((loginData: LoginData) => {
      this.tokenService.setToken(
        loginData.token.token,
        loginData.user._id,
        loginData.user.email
      );
      
      this.router.navigate(['/verification/otp']);
      // switch (this.getRandomNumber()) {
      //   case 1:
      //     this.router.navigate(['/verification/otp']);
      //     break;
      //   case 2:
      //     this.router.navigate(['/verification/externo']);
      //     break;
      //   case 3:
      //     this.router.navigate(['/verification/frase']);
      //     break;
      //   default:
      //     break;
      // }
    });
  }

  private getRandomNumber(): Number {
    return faker.number.int({ min: 1, max: 3 });
  }
}
